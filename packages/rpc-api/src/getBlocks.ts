import type { Commitment, Slot } from '@solana/rpc-types';

type GetBlocksApiResponse = Slot[];

export type GetBlocksApi = {
    /**
     * Returns a list of confirmed blocks between two slots
     */
    getBlocks(
        startSlot: Slot,
        endSlotInclusive?: Slot,
        config?: Readonly<{
            /**
             * Include only blocks at slots that have reached at least this level of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Exclude<Commitment, 'processed'>;
        }>,
    ): GetBlocksApiResponse;
};
