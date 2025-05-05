// Expense categorization logic
const categorizeExpense = (merchant, amount, date) => {
  // Food delivery services
  if (merchant === "DoorDash" || merchant === "GrubHub") return "Food";
  
  // Transportation
  if (merchant === "Uber") return "Travel";
  
  // Default category if no rules match
  return "Other";
};

export default categorizeExpense;