import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstInput: "",
  secondInput: "",
  result: "",
  sign: "+",
  operationCount: 0,
};
const inputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setFirstInput: (state, action) => {
      state.firstInput = action.payload;
    },

    setSecondInput: (state, action) => {
      state.secondInput = action.payload;
    },
    putSign: (state, action) => {
      state.sign = action.payload;
    },
    setResult: (state, action) => {
      switch (action.payload) {
        case "+":
          state.result = +state.firstInput + +state.secondInput;

          break;
        case "-":
          state.result = state.firstInput - state.secondInput;
          break;
        case "/":
          state.result =
            Math.round((state.firstInput / state.secondInput) * 100) / 100;
          break;
        case "*":
          state.result = state.firstInput * state.secondInput;
          break;
        default:
          state.result = "";
      }
    },
    setTotal: (state, action) => {
      if (state.firstInput && state.secondInput) {
        state.operationCount += 1;
      }
    },
  },
});
export const { setFirstInput, setSecondInput, putSign, setResult, setTotal } =
  inputSlice.actions;
export default inputSlice.reducer;
