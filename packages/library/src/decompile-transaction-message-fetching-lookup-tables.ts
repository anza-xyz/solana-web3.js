import { type FetchAccountsConfig } from '@solana/accounts';
import type { GetMultipleAccountsApi, Rpc } from '@solana/rpc';
import {
    CompilableTransactionMessage,
    CompiledTransactionMessage,
    decompileTransactionMessage,
} from '@solana/transaction-messages';

import { fetchAddressesForLookupTables } from './fetch-lookup-tables';

type DecompileTransactionMessageFetchingLookupTablesConfig = FetchAccountsConfig & {
    lastValidBlockHeight?: bigint;
};

export async function decompileTransactionMessageFetchingLookupTables(
    compiledTransactionMessage: CompiledTransactionMessage,
    rpc: Rpc<GetMultipleAccountsApi>,
    config?: DecompileTransactionMessageFetchingLookupTablesConfig,
): Promise<CompilableTransactionMessage> {
    const lookupTables =
        'addressTableLookups' in compiledTransactionMessage &&
        compiledTransactionMessage.addressTableLookups !== undefined &&
        compiledTransactionMessage.addressTableLookups.length > 0
            ? compiledTransactionMessage.addressTableLookups
            : [];
    const lookupTableAddresses = lookupTables.map(l => l.lookupTableAddress);

    const { lastValidBlockHeight, ...fetchAccountsConfig } = config ?? {};
    const addressesByLookupTableAddress =
        lookupTableAddresses.length > 0
            ? await fetchAddressesForLookupTables(lookupTableAddresses, rpc, fetchAccountsConfig)
            : {};

    return decompileTransactionMessage(compiledTransactionMessage, {
        addressesByLookupTableAddress,
        lastValidBlockHeight,
    });
}
