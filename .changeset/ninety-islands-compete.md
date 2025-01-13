---
'@solana/webcrypto-ed25519-polyfill': patch
---

Fixed a bug where specifying `Ed25519` in a different case, or as an object `{ name: 'Ed25519' }` would cause key operations to be delegated to the underlying runtime instead of the polyfill
