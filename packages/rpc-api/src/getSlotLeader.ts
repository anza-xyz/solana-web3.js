import type { Address } from '@solana/addresses';
import type { Commitment, Slot } from '@solana/rpc-types';

type GetSlotLeaderApiResponse = Address;

export type GetSlotLeaderApi = {
    /**
     * Returns the current slot leader
     */
    getSlotLeader(
        config?: Readonly<{
            /**
             * Fetch the leader as of the highest slot that has reached this level of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            minContextSlot?: Slot;
        }>,
    ): GetSlotLeaderApiResponse;
};
