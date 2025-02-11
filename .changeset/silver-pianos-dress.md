---
'@solana/web3.js': patch
---

return the transaction signature from the `sendAndConfirmTransactionFactory` and `sendAndConfirmDurableNonceTransactionFactory` since they already have the signature avaialble
