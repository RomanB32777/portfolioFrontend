import React, { createContext, useReducer, useContext } from "react";
// import { IState } from "../reducers/reducer";

// import { countInitialState, countActions } from "./countActions";
// import { userInitialState, userActions } from "./userActions";


// // объединение начальных состояний (initial states)
// const initialState  = {
//     ...countInitialState,
//     ...userInitialState
//   };

//   const StoreContext = createContext(initialState);

//   // объединение actions
//   const Actions = {
//     ...userActions,
//     ...countActions
//   };

//   const reducer = (state, action) => {
//     const act = Actions[action.type];
//     const update = act(state);
//     return { ...state, ...update };
//   };

// // useStore будет использоваться в React компонентах для извлечения и мутации состояния
// export const useStore = store => {
//   const { state, dispatch } = useContext(StoreContext);
//   return { state, dispatch };
// };