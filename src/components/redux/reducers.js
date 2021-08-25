import { types } from "./types";

const initialState={
  error:null,
  usuarios:[],
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ERROR:
      return{
        ...state,
        error:action.payload.error,
      }
    case types.USUARIOS:
      return{
        ...state,
        usuarios:action.payload.usuarios,
      }
    default:
      return state;
  }
};
