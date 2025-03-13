import type { Commitment, Slot } from '@solana/rpc-types';

type GetBlockHeightApiResponse = bigint;

export type GetBlockHeightApi = {
    /**
     * Returns the current block height of the node
     * @see https://solana.com/docs/rpc/http/getblockheight
     */
    getBlockHeight(
        config?: Readonly<{
            /**
             * Fetch the block height as of the highest slot that has reached this level of
             * commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            /**
             * Prevents accessing stale data by enforcing that the RPC node has processed
             * transactions up to this slot
             */
            minContextSlot?: Slot;
        }>,
    ): GetBlockHeightApiResponse;
};
