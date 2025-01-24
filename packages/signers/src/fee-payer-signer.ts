import { BaseTransactionMessage, ITransactionMessageWithFeePayer } from '@solana/transaction-messages';

import { TransactionSigner } from './transaction-signer';

/**
 * Alternative to {@link ITransactionMessageWithFeePayer} that uses a {@link TransactionSigner} for the fee payer.
 *
 * @typeParam TAddress - Supply a string literal to define a fee payer having a particular address.
 * @typeParam TSigner - Optionally provide a narrower type for the {@link TransactionSigner}.
 *
 * @example
 * ```ts
 * import { BaseTransactionMessage } from '@solana/transaction-messages';
 * import { generateKeyPairSigner, ITransactionMessageWithFeePayerSigner } from '@solana/signers';
 *
 * const transactionMessage: BaseTransactionMessage & ITransactionMessageWithFeePayerSigner = {
 *     feePayer: await generateKeyPairSigner(),
 *     instructions: [],
 *     version: 0,
 * };
 * ```
 */
export interface ITransactionMessageWithFeePayerSigner<
    TAddress extends string = string,
    TSigner extends TransactionSigner<TAddress> = TransactionSigner<TAddress>,
> {
    readonly feePayer: TSigner;
}

/**
 * Sets the fee payer of a {@link BaseTransactionMessage | transaction message}
 * using a {@link TransactionSigner}.
 *
 * @typeParam TFeePayerAddress - Supply a string literal to define a fee payer having a particular address.
 * @typeParam TTransactionMessage - The inferred type of the transaction message provided.
 *
 * @example
 * ```ts
 * import { pipe } from '@solana/functional';
 * import { generateKeyPairSigner, setTransactionMessageFeePayerSigner } from '@solana/signers';
 * import { createTransactionMessage } from '@solana/transaction-messages';
 *
 * const feePayer = await generateKeyPairSigner();
 * const transactionMessage = pipe(
 *     createTransactionMessage({ version: 0 }),
 *     message => setTransactionMessageFeePayerSigner(signer, message),
 * );
 * ```
 */
export function setTransactionMessageFeePayerSigner<
    TFeePayerAddress extends string,
    TTransactionMessage extends BaseTransactionMessage &
        Partial<ITransactionMessageWithFeePayer | ITransactionMessageWithFeePayerSigner>,
>(
    feePayer: TransactionSigner<TFeePayerAddress>,
    transactionMessage: TTransactionMessage,
): ITransactionMessageWithFeePayerSigner<TFeePayerAddress> & Omit<TTransactionMessage, 'feePayer'> {
    Object.freeze(feePayer);
    const out = { ...transactionMessage, feePayer };
    Object.freeze(out);
    return out;
}
