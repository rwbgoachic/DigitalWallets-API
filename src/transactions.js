/**
 * Validates a transaction between a payer and payee
 * @param {string} payer - The account ID of the payer
 * @param {string} payee - The account ID of the payee
 * @param {number} amount - The transaction amount
 * @returns {boolean} Whether the transaction is valid
 */
export function validateTransaction(payer, payee, amount) {
  // Validate input parameters
  if (!payer || typeof payer !== 'string') {
    return false;
  }
  
  if (!payee || typeof payee !== 'string') {
    return false;
  }
  
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return false;
  }
  
  // Prevent self-transfers
  if (payer === payee) {
    return false;
  }
  
  // Amount must be a positive number with at most 2 decimal places
  const amountStr = amount.toString();
  const decimalPlaces = amountStr.includes('.') ? 
    amountStr.split('.')[1].length : 0;
    
  if (decimalPlaces > 2) {
    return false;
  }
  
  return true;
}