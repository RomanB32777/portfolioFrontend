import React from 'react'
import { handlersPosts } from './actions/postsActions';
import { initialState } from './initialState';
import { ActionType } from './types';
import { handlersUser } from './actions/userActions';
import { IHandler } from '../../interfaces/stateInterfaces/IHandler';
import { IState } from '../../interfaces/stateInterfaces/IState';
import { IAction } from '../../interfaces/stateInterfaces/IAction';
import { handlersLoading } from './actions/loadingActions';


const handlers: IHandler = {
    DEFAULT: (state: IState) => {
        return state
    },
    ...handlersPosts,
    ...handlersUser,
    ...handlersLoading
}
export const reducer: React.Reducer<IState | any, IAction> = (state, action) => {
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}









































export const testReducer: React.Reducer<IState | any, IAction> = (state, action) => {

    switch (action.type) {
        case ActionType.AddPost:
            state.posts.push({
                ...action.payload.post
            })
            return {
                ...state,
            }
        case ActionType.SetLoading:
            state.loading = action.payload.loading
            return {
                ...state,
            }
        case ActionType.SetFormLogin:
            return Object.assign({}, state,
                action.payload,
            )
        case ActionType.SetFormRegister:
            return Object.assign({}, state,
                action.payload,
            )
        case ActionType.ChangeHeaderImg:
            return {
                ...state, ...action.payload
            }
        // return Object.assign({}, state,
        //     action.payload,
        // )
        case ActionType.SetPosts:
            // 1
            // state.posts = [...state.posts, ...action.payload.posts]
            // return {
            //     ...state
            // }

            // 2

            //state.posts = [...state.posts, action.payload.posts]
            return {
                ...state, ...action.payload
            }
        case ActionType.SetIsAuthenticated:
            return {
                ...state, ...action.payload, isAuthenticated: true
            }
        case ActionType.LogOut:
            return {
                ...state, user: {}, isAuthenticated: false
            }
        case ActionType.ClearState:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}