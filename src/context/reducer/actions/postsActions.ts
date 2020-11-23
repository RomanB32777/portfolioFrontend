import { IHandler } from "../../../interfaces/stateInterfaces/IHandler"
import { ActionType } from "../types"

export const handlersPosts: IHandler = {
    [ActionType.AddPost]: (state, action) => {
        state.posts && action && state.posts.push({
            ...action.payload.post
        })
        return { ...state }
    },
    [ActionType.SetPosts]: (state, action) => {
        return { ...state, ...action.payload }
    },
    [ActionType.UpdatePost]: (state, action) => {
        const posts = state.posts?.filter(post => post._id !== action.payload.post?._id)
        const update = { ...state.posts?.find(post => post._id === action.payload.post?._id), ...action.payload.post }
        posts && posts.push(update)
        return { ...state, posts }
    },
    [ActionType.DeletePost]: (state, action) => {
        return { ...state, posts: state.posts?.filter(post => post._id !== action.payload.post?._id) }
    },
}