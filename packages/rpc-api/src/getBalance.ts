import type { Address } from '@solana/addresses';
import type { Commitment, Lamports, Slot, SolanaRpcResponse } from '@solana/rpc-types';

type GetBalanceApiResponse = SolanaRpcResponse<Lamports>;

export type GetBalanceApi = {
    /**
     * Returns the balance of the account of provided Pubkey
     */
    getBalance(
        address: Address,
        config?: Readonly<{
            /**
             * Fetch the balance of the account as of the highest slot that has reached this level
             * of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            minContextSlot?: Slot;
        }>,
    ): GetBalanceApiResponse;
};
