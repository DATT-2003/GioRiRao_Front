// services/api/endpoints.js
export const ENDPOINTS = {
  DRINKS: {
    DRINKS_BY_CATEGORY: (category) => `drinks/category/${category}`,
    DRINK_DETAILS: (id) => `drinks/${id}`,
    CATEGORIES: () => `drinks/categories`,
  },
};
