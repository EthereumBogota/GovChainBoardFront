import { createSlice } from '@reduxjs/toolkit';

export const booleanSlice = createSlice({
  name: 'logged',
  initialState: {
    value: false, // Estado booleano inicial
  },
  reducers: {
    // toggleLogin: (state) => {
    //   // Invierte el valor del estado booleano (true -> false, false -> true)
    //   state.value = !state.value;
    // },
    setLogged: (state) => {
      // Establece el valor del estado booleano a true
      state.value = true;
    },
    setUnlogged: (state) => {
      // Establece el valor del estado booleano a false
      state.value = false;
    },
  },
});

// Action creators son generados automáticamente para cada reductor
export const {  setLogged, setUnlogged } = booleanSlice.actions;

export default booleanSlice.reducer;
