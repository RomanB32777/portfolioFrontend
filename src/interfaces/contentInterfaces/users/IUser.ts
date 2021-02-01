import { IAvatar } from './IAvatar';
export interface IUser {
    id?: string,
    token?: string,
    email?: string,
    name?: string,
    isAuthenticated?: boolean,
    status?: string | null,
    avatar?: IAvatar
}