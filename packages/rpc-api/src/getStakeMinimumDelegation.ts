import type { Commitment, Lamports, SolanaRpcResponse } from '@solana/rpc-types';

type GetStakeMinimumDelegationApiResponse = Lamports;

export type GetStakeMinimumDelegationApi = {
    /**
     * Returns the stake minimum delegation, in lamports.
     */
    getStakeMinimumDelegation(
        config?: Readonly<{
            /**
             * Fetch the minimum delegation as of  highest slot that has reached this level of
             * commitment.
             * @defaultValue "finalized"
             */
            commitment?: Commitment;
        }>,
    ): SolanaRpcResponse<GetStakeMinimumDelegationApiResponse>;
};
