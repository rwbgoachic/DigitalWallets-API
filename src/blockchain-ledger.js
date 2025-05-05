import { Hyperledger } from 'fabric-sdk';

export const logTransaction = (tx) => Hyperledger.post(tx);