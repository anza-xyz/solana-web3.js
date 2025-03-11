import type { Commitment, Slot } from '@solana/rpc-types';

type GetBlockHeightApiResponse = bigint;

export type GetBlockHeightApi = {
    /**
     * Returns the current block height of the node
     */
    getBlockHeight(
        config?: Readonly<{
            /**
             * Fetch the block height as of the highest slot that has reached this level of
             * commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            // The minimum slot that the request can be evaluated at
            minContextSlot?: Slot;
        }>,
    ): GetBlockHeightApiResponse;
};
