import { IUser } from "../contentInterfaces/users/IUser";
import { IPost } from "../contentInterfaces/posts/IPost";

export interface IState {
    loading?: boolean,
    user?: IUser,
    posts?: Array<IPost>
    // app?:
}


