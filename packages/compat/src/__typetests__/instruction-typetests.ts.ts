import { IInstruction } from '@solana/instructions/src';
import { TransactionInstruction } from '@solana/web3.js';

import { fromLegacyTransactionInstruction } from '../instruction';

const legacyInstruction = null as unknown as TransactionInstruction;

fromLegacyTransactionInstruction(legacyInstruction) satisfies IInstruction;
