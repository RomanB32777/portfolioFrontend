import { IState } from "./IState";
import { IAction } from "./IAction";

export interface IHandler {
    [type: string]: (state: IState, action: IAction) => IState
}
