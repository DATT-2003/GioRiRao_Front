import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDrinkCategories,
  fetchDrinksByCategory,
  fetchDrinkDetails,
  clearSelectedDrink,
  clearDrinksByCategory,
  selectCategories,
  selectDrinksByCategory,
  selectSelectedDrink,
  selectLoading,
  selectError,
} from "../redux/features/drinks/drinksSlice";

export const useDrinks = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const drinksByCategory = useSelector(selectDrinksByCategory);
  const selectedDrink = useSelector(selectSelectedDrink);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const loadCategories = useCallback(() => {
    dispatch(fetchDrinkCategories());
  }, [dispatch]);

  const loadDrinksByCategory = useCallback(
    (category) => {
      dispatch(fetchDrinksByCategory(category));
    },
    [dispatch]
  );

  const loadDrinkDetails = useCallback(
    (drinkId) => {
      dispatch(fetchDrinkDetails(drinkId));
    },
    [dispatch]
  );

  const clearDrink = useCallback(() => {
    dispatch(clearSelectedDrink());
  }, [dispatch]);

  const clearDrinks = useCallback(() => {
    dispatch(clearDrinksByCategory());
  }, [dispatch]);

  return {
    // State
    categories,
    drinksByCategory,
    selectedDrink,
    loading,
    error,
    // Actions
    loadCategories,
    loadDrinksByCategory,
    loadDrinkDetails,
    clearDrink,
    clearDrinks,
  };
};
