const categories = [
  {
    id: "income",
    value: "Income",
    subCategory: [
      { id: "business", value: "Business" },
      { id: "investment", value: "Investment" },
      { id: "lottery", value: "Lottery" },
      { id: "gift", value: "Gifts" },
      { id: "salary", value: "Salary" },
      { id: "rental_income", value: "Rental incomes" },
      { id: "deposits", value: "Deposits" },
    ],
  },
  {
    id: "expense",
    value: "Expense",
    subCategory: [
      { id: "bill", value: "Bill" },
      { id: "car", value: "Car" },
      { id: "clothes", value: "Clothes" },
      { id: "travel", value: "Travel" },
      { id: "food", value: "Food" },
      { id: "shopping", value: "Shopping" },
    ],
  },
];

module.exports = {
  categories,
};
