import crypto from 'crypto';

export const tokenizeCard = (cardNumber) => {
  // Generate a UUID as a secure token
  return crypto.randomUUID();
};