import { useDispatch } from "react-redux";
import {
  fetchDrinkDetails,
  fetchDrinksByCategory,
  clearDrinkDetails,
  fetchDrinkCategories,
} from "../redux/features/drinks/drinksSlice";

export const useDrinks = () => {
  const dispatch = useDispatch();
  const { drinksByCategory, drinkDetails, drinkCategories, loading, error } =
    useSelector((state) => state.drinks);

  const loadDrinksByCategory = (category) =>
    dispatch(fetchDrinksByCategory(category));
  const loadDrinkDetails = (drinkId) => dispatch(fetchDrinkDetails(drinkId));
  const clearDrinkDetailsInfo = () => dispatch(clearDrinkDetails());
  const loadDrinkCategories = (category) =>
    dispatch(fetchDrinkCategories(category));

  return {
    drinksByCategory,
    drinkDetails,
    loading,
    error,
    loadDrinksByCategory,
    loadDrinkDetails,
    clearDrinkDetailsInfo,
    loadDrinkCategories,
  };
};
