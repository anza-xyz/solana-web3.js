/**
 * This package allows us to manage and serialize Rust-like Option types in JavaScript.
 * It can be used standalone, but it is also exported as part of the Solana JavaScript SDK
 * [`@solana/web3.js@next`](https://github.com/anza-xyz/solana-web3.js/tree/main/packages/library).
 *
 * This package is also part of the [`@solana/codecs` package](https://github.com/anza-xyz/solana-web3.js/tree/main/packages/codecs)
 * which acts as an entry point for all codec packages as well as for their documentation.
 *
 * @packageDocumentation
 */
export * from './option';
export * from './option-codec';
export * from './unwrap-option';
export * from './unwrap-option-recursively';
