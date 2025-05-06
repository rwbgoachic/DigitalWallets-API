import { Hyperledger } from 'fabric-sdk';
import { tokenizeCard } from './tokenService.js';

export const logTransaction = (tx) => {
  // Tokenize any sensitive card data before logging
  const tokenizedTx = {
    ...tx,
    cardNumber: tx.cardNumber ? tokenizeCard(tx.cardNumber) : undefined
  };
  return Hyperledger.post(tokenizedTx);
};