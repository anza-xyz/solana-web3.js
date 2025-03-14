import type { Address } from '@solana/addresses';
import type {
    AccountInfoBase,
    AccountInfoWithBase58Bytes,
    AccountInfoWithBase58EncodedData,
    AccountInfoWithBase64EncodedData,
    AccountInfoWithBase64EncodedZStdCompressedData,
    AccountInfoWithJsonData,
    Commitment,
    DataSlice,
    Slot,
    SolanaRpcResponse,
} from '@solana/rpc-types';

type GetAccountInfoApiResponse<T> = (AccountInfoBase & T) | null;

type GetAccountInfoApiCommonConfig = Readonly<{
    // Defaults to `finalized`
    commitment?: Commitment;
    encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
    // The minimum slot that the request can be evaluated at
    minContextSlot?: Slot;
}>;

type GetAccountInfoApiSliceableCommonConfig = Readonly<{
    // Limit the returned account data using the provided "offset: <usize>" and "length: <usize>" fields.
    dataSlice?: DataSlice;
}>;

export type GetAccountInfoApi = {
    /**
     * Returns all information associated with the account of provided public key
     */
    getAccountInfo(
        address: Address,
        config: GetAccountInfoApiCommonConfig &
            GetAccountInfoApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base64';
            }>,
    ): SolanaRpcResponse<GetAccountInfoApiResponse<AccountInfoWithBase64EncodedData>>;
    getAccountInfo(
        address: Address,
        config: GetAccountInfoApiCommonConfig &
            GetAccountInfoApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base64+zstd';
            }>,
    ): SolanaRpcResponse<GetAccountInfoApiResponse<AccountInfoWithBase64EncodedZStdCompressedData>>;
    getAccountInfo(
        address: Address,
        config: GetAccountInfoApiCommonConfig &
            Readonly<{
                encoding: 'jsonParsed';
            }>,
    ): SolanaRpcResponse<GetAccountInfoApiResponse<AccountInfoWithJsonData>>;
    getAccountInfo(
        address: Address,
        config: GetAccountInfoApiCommonConfig &
            GetAccountInfoApiSliceableCommonConfig &
            Readonly<{
                encoding: 'base58';
            }>,
    ): SolanaRpcResponse<GetAccountInfoApiResponse<AccountInfoWithBase58EncodedData>>;
    getAccountInfo(
        address: Address,
        config?: Omit<GetAccountInfoApiCommonConfig, 'encoding'>,
    ): SolanaRpcResponse<GetAccountInfoApiResponse<AccountInfoWithBase58Bytes>>;
};
