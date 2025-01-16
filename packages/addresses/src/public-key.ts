import { assertKeyExporterIsAvailable } from '@solana/assertions';
import { SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY, SolanaError } from '@solana/errors';

import { Address, getAddressDecoder } from './address';

/**
 * Given a public {@link CryptoKey}, this method will return its associated {@link Address}.
 *
 * @example
 * ```ts
 * import { getAddressFromPublicKey } from '@solana/addresses';
 *
 * const address = await getAddressFromPublicKey(publicKey);
 * ```
 */
export async function getAddressFromPublicKey(publicKey: CryptoKey): Promise<Address> {
    assertKeyExporterIsAvailable();
    if (publicKey.type !== 'public' || publicKey.algorithm.name !== 'Ed25519') {
        throw new SolanaError(SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY);
    }
    const publicKeyBytes = await crypto.subtle.exportKey('raw', publicKey);
    return getAddressDecoder().decode(new Uint8Array(publicKeyBytes));
}
