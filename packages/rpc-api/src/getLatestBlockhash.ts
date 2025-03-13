import type { Blockhash, Commitment, Slot, SolanaRpcResponse } from '@solana/rpc-types';

type GetLatestBlockhashApiResponse = Readonly<{
    /** a Hash as base-58 encoded string */
    blockhash: Blockhash;
    /** last block height at which the blockhash will be valid */
    lastValidBlockHeight: bigint;
}>;

export type GetLatestBlockhashApi = {
    /**
     * Returns the latest blockhash
     */
    getLatestBlockhash(
        config?: Readonly<{
            /**
             * Fetch the latest blockhash as of the highest slot that has reached this level of
             * commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            /**
             * Prevents accessing stale data by enforcing that the RPC node has processed transactions up to
             * this slot
             */
            minContextSlot?: Slot;
        }>,
    ): SolanaRpcResponse<GetLatestBlockhashApiResponse>;
};
