import api from "./api/axios";
import { ENDPOINTS } from "./api/endpoints";

export const DrinkService = {
  getDrinksByCategory: async (category) => {
    try {
      const response = await api.get(
        ENDPOINTS.DRINKS.DRINKS_BY_CATEGORY(category)
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getDrinkDetails: async (drinkId) => {
    try {
      const response = await api.get(ENDPOINTS.DRINKS.DRINK_DETAILS(drinkId));
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getCategories: async (category) => {
    try {
      const response = await api.get(ENDPOINTS.DRINKS.CATEGORIES(category));
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
