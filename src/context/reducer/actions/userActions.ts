import { IHandler } from "../../../interfaces/stateInterfaces/IHandler";

export const handlersUser: IHandler = {
    ["setIsAuthenticated"]: (state, action) => {
        return {...state, ...action.payload}
        //return {...state,  ...action.payload, user: {isAuthenticated: true}}
    },
    ["updateUser"]: (state, action) => {
        return {...state, ...action.payload}
    },
    ["logout"]: (state, action) => {
        return { ...state, user: {isAuthenticated: false, status: null}}
    },
}

// const user: IUser = {
//     id: '',
//     token: '',
//     email: '',
//     name: '',
//     status: null,
//     isAuthenticated: false,
//     avatar: {}
// }

// export const userInitialState = {
//     user
// };


