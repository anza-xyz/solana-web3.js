import type { Address } from '@solana/addresses';
import type { Commitment, Lamports, Slot, SolanaRpcResponse } from '@solana/rpc-types';

type GetBalanceApiResponse = SolanaRpcResponse<Lamports>;

export type GetBalanceApi = {
    /**
     * Fetches the Lamport balance of the account at the given address.
     * @see https://solana.com/docs/rpc/http/getbalance
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
            /**
             * Prevents accessing stale data by enforcing that the RPC node has processed
             * transactions up to this slot
             */
            minContextSlot?: Slot;
        }>,
    ): GetBalanceApiResponse;
};
