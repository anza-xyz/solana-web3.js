import type { Address } from '@solana/addresses';
import type { Commitment, Lamports, Slot } from '@solana/rpc-types';

type GetInflationRewardApiConfig = Readonly<{
    /**
     * Fetch the inflation reward details as of the highest slot that has reached this level of
     * commitment.
     * @defaultValue "finalized"
     */
    commitment?: Commitment;
    // An epoch for which the reward occurs.
    // If omitted, the previous epoch will be used
    epoch?: bigint;
    /**
     * Prevents accessing stale data by enforcing that the RPC node has processed transactions up to
     * this slot
     */
    minContextSlot?: Slot;
}>;

type InflationReward = Readonly<{
    // Reward amount in lamports
    amount: Lamports;
    // Vote account commission when the reward was credited
    commission: number;
    // The slot in which the rewards are effective
    effectiveSlot: Slot;
    // Epoch for which reward occurred
    epoch: bigint;
    // Post balance of the account in lamports
    postBalance: Lamports;
}>;

type GetInflationRewardApiResponse = readonly (InflationReward | null)[];

export type GetInflationRewardApi = {
    /**
     * Returns the inflation / staking reward for a list of addresses for an epoch
     */
    getInflationReward(addresses: Address[], config?: GetInflationRewardApiConfig): GetInflationRewardApiResponse;
};
