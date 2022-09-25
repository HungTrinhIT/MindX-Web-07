const mockData = require("../config/data");

const getAllCategory = (page, perPage) => {
  const categories = mockData.categories;
  // logical

  return categories;
};

module.exports = {
  getAllCategory,
};
