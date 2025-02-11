import { createSlice } from '@reduxjs/toolkit';
  
  const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: { isVisible: false, quantity: 1 , price : 100, priceItem: 100 },
    reducers: {
      showElement: (state) => {
        state.isVisible = true;
      },

      increment: (state) => {
        state.quantity += 1;
        state.price = state.quantity * state.priceItem;
      },

      decrement: (state) => {
        if (state.quantity > 1) {
          state.quantity -= 1;
          state.price = state.quantity * state.priceItem;
        }
      },
          
      
    },
  });
  
  export const {showElement, increment, decrement } = visibilitySlice.actions;
  export default visibilitySlice.reducer;