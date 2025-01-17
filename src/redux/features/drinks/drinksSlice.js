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
  async (_, { rejectWithValue }) => {
    try {
      const response = await DrinkService.getDrinksByCategory(category);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDrinkDetails = createAsyncThunk(
  "drinks/fetchDrinkDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await DrinkService.getDrinkDetails(drinkId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDrinkCategories = createAsyncThunk(
  "drinks/fetchDrinkCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await DrinkService.getCategories(category);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    clearDrinkDetails: (state) => {
      state.drinkDetails = null;
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

export const { clearDrinkDetails } = drinkSlice.actions;
export default drinkSlice.reducer;
