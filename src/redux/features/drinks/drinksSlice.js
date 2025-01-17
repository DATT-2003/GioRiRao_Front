import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DrinkService } from "../../../services/drinks.service";

const initialState = {
  drinksByCategory: [],
  drinkDetails: null,
  drinkCategories: [],
  loading: false,
  error: null,
};

export const fetchDrinksByCategory = createAsyncThunk(
  "drinks/fetchDrinksByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await DrinkService.getDrinksByCategory(category);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDrinkDetails = createAsyncThunk(
  "drinks/fetchDrinkDetails",
  async (drinkId, { rejectWithValue }) => {
    try {
      const response = await DrinkService.getDrinkDetails(drinkId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDrinkCategories = createAsyncThunk(
  "drinks/fetchDrinkCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await DrinkService.getCategories();
      return response;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    clearDrinkDetails: (state) => {
      state.drinkDetails = null;
    },
    clearDrinksByCategory: (state) => {
      state.drinksByCategory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchDrinksByCategory
      .addCase(fetchDrinksByCategory.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchDrinksByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.drinksByCategory = action.payload;
      })
      .addCase(fetchDrinksByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetchDrinkDetails
      .addCase(fetchDrinkDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrinkDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.drinkDetails = action.payload;
      })
      .addCase(fetchDrinkDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // fetchDrinkCategories
      .addCase(fetchDrinkCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrinkCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.drinkCategories = action.payload;
      })
      .addCase(fetchDrinkCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Actions
export const { clearSelectedDrink, clearDrinksByCategory } =
  drinksSlice.actions;

// Selectors
export const selectCategories = (state) => state.drinks.drinkCategories;
export const selectDrinksByCategory = (state) => state.drinks.drinksByCategory;
export const selectSelectedDrink = (state) => state.drinks.drinkDetails;
export const selectLoading = (state) => state.drinks.loading;
export const selectError = (state) => state.drinks.error;

export default drinksSlice.reducer;
