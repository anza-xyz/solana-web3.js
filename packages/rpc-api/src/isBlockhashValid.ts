import type { Blockhash, Commitment, Slot, SolanaRpcResponse } from '@solana/rpc-types';

type IsBlockhashValidApiResponse = boolean;

export type IsBlockhashValidApi = {
    /**
     * Returns whether a blockhash is still valid or not
     */
    isBlockhashValid(
        /** query blockhash, as a base-58 encoded string */
        blockhash: Blockhash,
        config?: Readonly<{
            /**
             * Evaluate whether the blockhash is valid as of the highest slot that has reached this
             * level of commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
            /**
             * Prevents accessing stale data by enforcing that the RPC node has processed
             * transactions up to this slot
             */
            minContextSlot?: Slot;
        }>,
    ): SolanaRpcResponse<IsBlockhashValidApiResponse>;
};
