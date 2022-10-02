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

const a = [
  {
    item: "Pens",
    quantity: 350,
    tags: ["school", "office"],
    size: {
      w: 10,
      h: 30,
    },
  },
  {
    item: "Erasers",
    quantity: 15,
    tags: ["school", "home"],
    size: {
      w: 10,
      h: 30,
    },
  },
  {
    item: "Maps",
    tags: ["office", "storage"],
    size: {
      w: 10,
      h: 30,
    },
  },
  {
    item: "Books",
    quantity: 5,
    tags: ["school", "storage", "home"],
    size: {
      w: 10,
      h: 30,
    },
  },
];
