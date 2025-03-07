import { TransactionMessageWithDurableNonceLifetime } from './durable-nonce';
import { BaseTransactionMessage } from './transaction-message';

export function appendTransactionMessageInstruction<TTransaction extends BaseTransactionMessage>(
    instruction: TTransaction['instructions'][number],
    transaction: TTransaction,
): TTransaction {
    return appendTransactionMessageInstructions([instruction], transaction);
}

export function appendTransactionMessageInstructions<TTransaction extends BaseTransactionMessage>(
    instructions: ReadonlyArray<TTransaction['instructions'][number]>,
    transaction: TTransaction,
): TTransaction {
    return Object.freeze({
        ...transaction,
        instructions: Object.freeze([...transaction.instructions, ...instructions]),
    });
}

// Durable nonce advance instruction must be the first instruction in the transaction message
// So if instructions are prepended, we strip the durable nonce transaction message type
type ExcludeDurableNonce<T> = T extends TransactionMessageWithDurableNonceLifetime
    ? BaseTransactionMessage & Omit<T, keyof TransactionMessageWithDurableNonceLifetime>
    : T;

export function prependTransactionMessageInstruction<TTransaction extends BaseTransactionMessage>(
    instruction: TTransaction['instructions'][number],
    transaction: TTransaction,
): ExcludeDurableNonce<TTransaction> {
    return prependTransactionMessageInstructions([instruction], transaction);
}

export function prependTransactionMessageInstructions<TTransaction extends BaseTransactionMessage>(
    instructions: ReadonlyArray<TTransaction['instructions'][number]>,
    transaction: TTransaction,
): ExcludeDurableNonce<TTransaction> {
    return Object.freeze({
        ...transaction,
        instructions: Object.freeze([...instructions, ...transaction.instructions]),
    }) as ExcludeDurableNonce<TTransaction>;
}
