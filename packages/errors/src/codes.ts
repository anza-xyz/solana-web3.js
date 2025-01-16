/**
 * To add a new error, follow the instructions at
 * https://github.com/anza-xyz/solana-web3.js/tree/main/packages/errors/#adding-a-new-error
 *
 * @module
 * @privateRemarks
 * WARNING:
 *   - Don't remove error codes
 *   - Don't change or reorder error codes.
 *
 * Good naming conventions:
 *   - Prefixing common errors — e.g. under the same package — can be a good way to namespace them. E.g. All codec-related errors start with `SOLANA_ERROR__CODECS__`.
 *   - Use consistent names — e.g. choose `PDA` or `PROGRAM_DERIVED_ADDRESS` and stick with it. Ensure your names are consistent with existing error codes. The decision might have been made for you.
 *   - Recommended prefixes and suffixes:
 *     - `MALFORMED_`: Some input was not constructed properly. E.g. `MALFORMED_BASE58_ENCODED_ADDRESS`.
 *     - `INVALID_`: Some input is invalid (other than because it was MALFORMED). E.g. `INVALID_NUMBER_OF_BYTES`.
 *     - `EXPECTED_`: Some input was different than expected, no need to specify the "GOT" part unless necessary. E.g. `EXPECTED_DECODED_ACCOUNT`.
 *     - `_CANNOT_`: Some operation cannot be performed or some input cannot be used due to some condition. E.g. `CANNOT_DECODE_EMPTY_BYTE_ARRAY` or `PDA_CANNOT_END_WITH_PDA_MARKER`.
 *     - `_MUST_BE_`: Some condition must be true. E.g. `NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE`.
 *     - `_FAILED_TO_`: Tried to perform some operation and failed. E.g. `FAILED_TO_DECODE_ACCOUNT`.
 *     - `_NOT_FOUND`: Some operation lead to not finding something. E.g. `ACCOUNT_NOT_FOUND`.
 *     - `_OUT_OF_RANGE`: Some value is out of range. E.g. `ENUM_DISCRIMINATOR_OUT_OF_RANGE`.
 *     - `_EXCEEDED`: Some limit was exceeded. E.g. `PDA_MAX_SEED_LENGTH_EXCEEDED`.
 *     - `_MISMATCH`: Some elements do not match. E.g. `ENCODER_DECODER_FIXED_SIZE_MISMATCH`.
 *     - `_MISSING`: Some required input is missing. E.g. `TRANSACTION_FEE_PAYER_MISSING`.
 *     - `_UNIMPLEMENTED`: Some required component is not available in the environment. E.g. `SUBTLE_CRYPTO_VERIFY_FUNCTION_UNIMPLEMENTED`.
 */
export const SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = 1;
export const SOLANA_ERROR__INVALID_NONCE = 2;
export const SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = 3;
export const SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = 4;
export const SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = 5;
export const SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = 6;
export const SOLANA_ERROR__MALFORMED_BIGINT_STRING = 7;
export const SOLANA_ERROR__MALFORMED_NUMBER_STRING = 8;
export const SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = 9;

// JSON-RPC-related errors.
// Reserve error codes in the range [-32768, -32000]
// Keep in sync with https://github.com/anza-xyz/agave/blob/master/rpc-client-api/src/custom_error.rs
export const SOLANA_ERROR__JSON_RPC__PARSE_ERROR = -32700;
export const SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR = -32603;
export const SOLANA_ERROR__JSON_RPC__INVALID_PARAMS = -32602;
export const SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND = -32601;
export const SOLANA_ERROR__JSON_RPC__INVALID_REQUEST = -32600;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED = -32016;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION = -32015;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET = -32014;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH = -32013;
export const SOLANA_ERROR__JSON_RPC__SCAN_ERROR = -32012;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE = -32011;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX = -32010;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED = -32009;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT = -32008;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED = -32007;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE = -32006;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY = -32005;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE = -32004;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE = -32003;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE = -32002;
export const SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP = -32001;

// Addresses-related errors.
// Reserve error codes in the range [2800000-2800999].
export const SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH = 2800000;
export const SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE = 2800001;
export const SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS = 2800002;
export const SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY = 2800003;
export const SOLANA_ERROR__ADDRESSES__MALFORMED_PDA = 2800004;
export const SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE = 2800005;
export const SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = 2800006;
export const SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED = 2800007;
export const SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE = 2800008;
export const SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = 2800009;
export const SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER = 2800010;

// Account-related errors.
// Reserve error codes in the range [3230000-3230999].
export const SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND = 3230000;
export const SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND = 32300001;
export const SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT = 3230002;
export const SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT = 3230003;
export const SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = 3230004;

// Subtle-Crypto-related errors.
// Reserve error codes in the range [3610000-3610999].
export const SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT = 3610000;
export const SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED = 3610001;
export const SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED = 3610002;
export const SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED = 3610003;
export const SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED = 3610004;
export const SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED = 3610005;
export const SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED = 3610006;
export const SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY = 3610007;

// Crypto-related errors.
// Reserve error codes in the range [3611000-3611050].
export const SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED = 3611000;

// Key-related errors.
// Reserve error codes in the range [3704000-3704999].
export const SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH = 3704000;
export const SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH = 3704001;
export const SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH = 3704002;
export const SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = 3704003;
export const SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY = 3704004;

// Instruction-related errors.
// Reserve error codes in the range [4128000-4128999].
export const SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS = 4128000;
export const SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA = 4128001;
export const SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH = 4128002;

// Instruction errors.
// Reserve error codes starting with [4615000-4615999] for the Rust enum `InstructionError`.
// Error names here are dictated by the RPC (see ./instruction-error.ts).
export const SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN = 4615000;
export const SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR = 4615001;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT = 4615002;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA = 4615003;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA = 4615004;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL = 4615005;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS = 4615006;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID = 4615007;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE = 4615008;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED = 4615009;
export const SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT = 4615010;
export const SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION = 4615011;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID = 4615012;
export const SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND = 4615013;
export const SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED = 4615014;
export const SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE = 4615015;
export const SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED = 4615016;
export const SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX = 4615017;
export const SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED = 4615018;
export const SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED = 4615019;
export const SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS = 4615020;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED = 4615021;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE = 4615022;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED = 4615023;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 4615024;
export const SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC = 4615025;
export const SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM = 4615026;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR = 4615027;
export const SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED = 4615028;
export const SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE = 4615029;
export const SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = 4615030;
export const SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID = 4615031;
export const SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH = 4615032;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT = 4615033;
export const SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED = 4615034;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED = 4615035;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS = 4615036;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC = 4615037;
export const SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED = 4615038;
export const SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION = 4615039;
export const SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE = 4615040;
export const SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE = 4615041;
export const SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE = 4615042;
export const SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE = 4615043;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY = 4615044;
export const SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR = 4615045;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT = 4615046;
export const SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER = 4615047;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW = 4615048;
export const SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR = 4615049;
export const SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER = 4615050;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = 4615051;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED = 4615052;
export const SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = 4615053;
export const SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = 4615054;

// Signer-related errors.
// Reserve error codes in the range [5508000-5508999].
export const SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = 5508000;
export const SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER = 5508001;
export const SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER = 5508002;
export const SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER = 5508003;
export const SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER = 5508004;
export const SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER = 5508005;
export const SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER = 5508006;
export const SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER = 5508007;
export const SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER = 5508008;
export const SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = 5508009;
export const SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING = 5508010;
export const SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED = 5508011;

// Transaction-related errors.
// Reserve error codes in the range [5663000-5663999].
export const SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES = 5663000;
export const SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = 5663001;
export const SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME = 5663002;
export const SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME = 5663003;
export const SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE = 5663004;
export const SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = 5663005;
export const SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = 5663006;
export const SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = 5663007;
export const SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = 5663008;
export const SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING = 5663009;
export const SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING = 5663010;
export const SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING = 5663011;
export const SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING = 5663012;
export const SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING = 5663013;
export const SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE = 5663014;
export const SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION = 5663015;
export const SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES = 5663016;
export const SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH = 5663017;
export const SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT = 5663018;
export const SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT = 5663019;

// Transaction errors.
// Reserve error codes starting with [7050000-7050999] for the Rust enum `TransactionError`.
// Error names here are dictated by the RPC (see ./transaction-error.ts).
export const SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN = 7050000;
export const SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE = 7050001;
export const SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE = 7050002;
export const SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND = 7050003;
export const SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND = 7050004;
export const SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE = 7050005;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE = 7050006;
export const SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED = 7050007;
export const SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND = 7050008;
// `InstructionError` intentionally omitted.
export const SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP = 7050009;
export const SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE = 7050010;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX = 7050011;
export const SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE = 7050012;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION = 7050013;
export const SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE = 7050014;
export const SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE = 7050015;
export const SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 7050016;
export const SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = 7050017;
export const SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION = 7050018;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT = 7050019;
export const SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = 7050020;
export const SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = 7050021;
export const SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS = 7050022;
export const SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND = 7050023;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER = 7050024;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA = 7050025;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX = 7050026;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT = 7050027;
export const SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT = 7050028;
export const SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = 7050029;
export const SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION = 7050030;
export const SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT = 7050031;
export const SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = 7050032;
export const SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = 7050033;
export const SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED = 7050034;
export const SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = 7050035;
export const SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION = 7050036;

// Codec-related errors.
// Reserve error codes in the range [8078000-8078999].
export const SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078000;
export const SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = 8078001;
export const SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH = 8078002;
export const SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH = 8078003;
export const SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004;
export const SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = 8078005;
export const SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006;
export const SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS = 8078007;
export const SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE = 8078008;
export const SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT = 8078009;
export const SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT = 8078010;
export const SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = 8078011;
export const SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE = 8078012;
export const SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH = 8078013;
export const SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE = 8078014;
export const SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT = 8078015;
export const SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE = 8078016;
export const SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE = 8078017;
export const SOLANA_ERROR__CODECS__INVALID_CONSTANT = 8078018;
export const SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE = 8078019;
export const SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL = 8078020;
export const SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES = 8078021;
export const SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS = 8078022;

// RPC-related errors.
// Reserve error codes in the range [8100000-8100999].
export const SOLANA_ERROR__RPC__INTEGER_OVERFLOW = 8100000;
export const SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN = 8100001;
export const SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR = 8100002;
export const SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD = 8100003;

// RPC-Subscriptions-related errors.
// Reserve error codes in the range [8190000-8190999].
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN = 8190000;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID = 8190001;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED = 8190002;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED = 8190003;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT = 8190004;

// Invariant violation errors.
// Reserve error codes in the range [9900000-9900999].
// These errors should only be thrown when there is a bug with the
// library itself and should, in theory, never reach the end user.
export const SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING = 9900000;
export const SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE = 9900001;
export const SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = 9900002;
export const SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE = 9900003;
export const SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED = 9900004;

/**
 * A union of every Solana error code
 *
 * @privateRemarks
 * You might be wondering why this is not a TypeScript enum or const enum.
 *
 * One of the goals of this library is to enable people to use some or none of it without having to
 * bundle all of it.
 *
 * If we made the set of error codes an enum then anyone who imported it (even if to only use a
 * single error code) would be forced to bundle every code and its label.
 *
 * Const enums appear to solve this problem by letting the compiler inline only the codes that are
 * actually used. Unfortunately exporting ambient (const) enums from a library like `@solana/errors`
 * is not safe, for a variety of reasons covered here: https://stackoverflow.com/a/28818850
 */
export type SolanaErrorCode =
    | typeof SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED
    | typeof SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT
    | typeof SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT
    | typeof SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND
    | typeof SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED
    | typeof SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS
    | typeof SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH
    | typeof SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY
    | typeof SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE
    | typeof SOLANA_ERROR__ADDRESSES__MALFORMED_PDA
    | typeof SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED
    | typeof SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED
    | typeof SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE
    | typeof SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER
    | typeof SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE
    | typeof SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED
    | typeof SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY
    | typeof SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS
    | typeof SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL
    | typeof SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH
    | typeof SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH
    | typeof SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH
    | typeof SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH
    | typeof SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH
    | typeof SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH
    | typeof SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE
    | typeof SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH
    | typeof SOLANA_ERROR__CODECS__INVALID_CONSTANT
    | typeof SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT
    | typeof SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT
    | typeof SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT
    | typeof SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS
    | typeof SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE
    | typeof SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES
    | typeof SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED
    | typeof SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS
    | typeof SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA
    | typeof SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR
    | typeof SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH
    | typeof SOLANA_ERROR__INVALID_NONCE
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE
    | typeof SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR
    | typeof SOLANA_ERROR__JSON_RPC__INVALID_PARAMS
    | typeof SOLANA_ERROR__JSON_RPC__INVALID_REQUEST
    | typeof SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND
    | typeof SOLANA_ERROR__JSON_RPC__PARSE_ERROR
    | typeof SOLANA_ERROR__JSON_RPC__SCAN_ERROR
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE
    | typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION
    | typeof SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH
    | typeof SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH
    | typeof SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH
    | typeof SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY
    | typeof SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE
    | typeof SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE
    | typeof SOLANA_ERROR__MALFORMED_BIGINT_STRING
    | typeof SOLANA_ERROR__MALFORMED_NUMBER_STRING
    | typeof SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD
    | typeof SOLANA_ERROR__RPC__INTEGER_OVERFLOW
    | typeof SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR
    | typeof SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID
    | typeof SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER
    | typeof SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER
    | typeof SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS
    | typeof SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING
    | typeof SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED
    | typeof SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE
    | typeof SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION
    | typeof SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES
    | typeof SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME
    | typeof SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME
    | typeof SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE
    | typeof SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE
    | typeof SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES
    | typeof SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE
    | typeof SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH
    | typeof SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING
    | typeof SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT;

/**
 * Errors of this type are understood to have an optional {@link SolanaError} nested inside as
 * `cause`.
 */
export type SolanaErrorCodeWithCause = typeof SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE;
