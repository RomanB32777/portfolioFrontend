import { IImage } from "../images/IImage";

export interface IPost {
    _id?: string,
    title?: string,
    body?: string,
    owner?: any,
    date?: string,
    files?: Array<IImage>,
    img?: any,
    inMainPage?: boolean,
    type?: string,
    status?: string
}