import React, { useReducer } from 'react'
import { reducer } from './reducer';
import { ReducerContext } from './reducerContext';
import { ActionType } from './types';
import { IState } from '../../interfaces/stateInterfaces/IState';
import { IAction } from '../../interfaces/stateInterfaces/IAction';
import { IPost } from '../../interfaces/contentInterfaces/posts/IPost';
import { initialState } from './initialState';

export const ReducerState: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState)
    
    const addPost = (post: IPost) => {
        dispatch({
            type: ActionType.AddPost,
            payload: {
                post: {
                    ...post
                }
            } 
        })
    }

    const showLoader = () => { dispatch({ type: ActionType.SetLoading, payload: {} }) }
    const hideLoader = () => { dispatch({ type: ActionType.HideLoading,  payload: {} }) }

    return (
        <ReducerContext.Provider value={{
            state, dispatch, showLoader, hideLoader
        }}>
            {children}
        </ReducerContext.Provider>
    )
}