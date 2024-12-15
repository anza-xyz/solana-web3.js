import { AccountRole, IInstruction } from '@solana/instructions';
import { TransactionInstruction } from '@solana/web3.js';

import { fromLegacyPublicKey } from './address';

export function fromLegacyTransactionInstruction(legacyInstruction: TransactionInstruction): IInstruction {
    const data = legacyInstruction.data?.byteLength > 0 ? Uint8Array.from(legacyInstruction.data) : undefined;
    const accounts = legacyInstruction.keys.map(accountMeta =>
        Object.freeze({
            address: fromLegacyPublicKey(accountMeta.pubkey),
            role: determineRole(accountMeta.isSigner, accountMeta.isWritable),
        }),
    );
    const programAddress = fromLegacyPublicKey(legacyInstruction.programId);
    return Object.freeze({
        ...(accounts.length ? { accounts: Object.freeze(accounts) } : null),
        ...(data ? { data } : null),
        programAddress,
    });
}

function determineRole(isSigner: boolean, isWritable: boolean): AccountRole {
    if (isSigner && isWritable) return AccountRole.WRITABLE_SIGNER;
    if (isSigner) return AccountRole.READONLY_SIGNER;
    if (isWritable) return AccountRole.WRITABLE;
    return AccountRole.READONLY;
}
