import type { Commitment, Slot } from '@solana/rpc-types';

type GetSlotApiResponse = Slot;

export type GetSlotApi = {
    /**
     * Returns the slot that has reached the given or default commitment level
     */
    getSlot(
        config?: Readonly<{
            /**
             * Fetch the highest slot that has reached this level of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            minContextSlot?: Slot;
        }>,
    ): GetSlotApiResponse;
};
