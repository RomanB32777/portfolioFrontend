import { IHandler } from "../../../interfaces/stateInterfaces/IHandler"
import { ActionType } from "../types"

export const handlersLoading: IHandler = {
    [ActionType.SetLoading]: (state ) => {
        return { ...state, loading: true }
    },
    [ActionType.HideLoading]: (state ) => {
        return { ...state, loading: false }
    }
}