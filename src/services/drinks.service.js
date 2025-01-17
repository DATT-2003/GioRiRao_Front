import api from "./api/axios";
import { ENDPOINTS } from "./api/endpoints";

export const DrinkService = {
  getDrinksByCategory: async (category) => {
    try {
      const response = await api.get(
        ENDPOINTS.DRINKS.DRINKS_BY_CATEGORY(category)
      );

      return response.drink.docs;
    } catch (error) {
      throw error;
    }
  },
  getDrinkDetails: async (drinkId) => {
    try {
      const response = await api.get(ENDPOINTS.DRINKS.DRINK_DETAILS(drinkId));
      return response.drink;
    } catch (error) {
      throw error;
    }
  },
  getCategories: async () => {
    try {
      const response = await api.get(ENDPOINTS.DRINKS.CATEGORIES());
      return response.categories;
    } catch (error) {
      throw error;
    }
  },
};
