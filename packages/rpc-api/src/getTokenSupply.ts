import type { Address } from '@solana/addresses';
import type { Commitment, SolanaRpcResponse, TokenAmount } from '@solana/rpc-types';

type GetTokenSupplyApiResponse = TokenAmount;

export type GetTokenSupplyApi = {
    /**
     * Returns the total supply of an SPL Token mint
     */
    getTokenSupply(
        /** Pubkey of the token Mint to query, as base-58 encoded string */
        address: Address,
        config?: Readonly<{
            /**
             * Fetch the supply as of the highest slot that has reached this level of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
        }>,
    ): SolanaRpcResponse<GetTokenSupplyApiResponse>;
};
