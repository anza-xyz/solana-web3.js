import type { Address } from '@solana/addresses';
import type { Commitment, SolanaRpcResponse, TokenAmount } from '@solana/rpc-types';

type GetTokenAccountBalanceApiResponse = TokenAmount;

export type GetTokenAccountBalanceApi = {
    /**
     * Returns the token balance of an SPL Token account
     */
    getTokenAccountBalance(
        /** Pubkey of Token account to query, as base-58 encoded string */
        address: Address,
        config?: Readonly<{
            /**
             * Fetch the balance as of the highest slot that has reached this level of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
        }>,
    ): SolanaRpcResponse<GetTokenAccountBalanceApiResponse>;
};
