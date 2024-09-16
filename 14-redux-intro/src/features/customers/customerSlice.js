import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createAt = action.payload.createAt;
      },
    },
    updateName: {
      prepare(fullname) {
        return { payload: { fullname } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
      },
    },
  },
});
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

/*
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createAt: action.payload.createAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}
export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

*/
