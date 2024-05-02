import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action asynchrone pour charger les annonces depuis l'API
export const fetchAnnonces = createAsyncThunk(
  'annonces/fetchAnnonces',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/annonce');
    return response.data;
  }
);

const initialState = {
  annonces: [],
  status: 'idle',
  error: null
};

const annoncesSlice = createSlice({
  name: 'annonces',
  initialState,
  reducers: {
    // Ajoutez des reducers synchrones ici si nécessaire
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnonces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnnonces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.annonces = action.payload;
      })
      .addCase(fetchAnnonces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAllAnnonces = (state) => state.annonces.annonces;

export default annoncesSlice.reducer;
