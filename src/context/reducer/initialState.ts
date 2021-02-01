import { IState } from "../../interfaces/stateInterfaces/IState";

export const initialState: IState = {
    loading: false,
    user: {
        isAuthenticated: false,
        status: null
    },
    posts: []
};