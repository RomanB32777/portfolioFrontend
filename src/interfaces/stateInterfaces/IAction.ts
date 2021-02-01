import { ActionType } from "../../context/reducer/types";
import { IUser } from "../contentInterfaces/users/IUser";
import { IPost } from "../contentInterfaces/posts/IPost";

export interface IAction {
    type: ActionType,
    payload: {
        loading?: boolean,
        headerImg?: string,
        user?: IUser,
        post?: IPost
        posts?: Array<IPost>

    };
}