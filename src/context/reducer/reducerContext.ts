import { createContext, Dispatch } from 'react'
import { IState } from '../../interfaces/stateInterfaces/IState'
import { IAction } from '../../interfaces/stateInterfaces/IAction'

export interface IContextProps {
    state: IState,
    dispatch: Dispatch<IAction>,
    showLoader: any,
    hideLoader: any
    
}

export const ReducerContext = createContext({} as IContextProps)


