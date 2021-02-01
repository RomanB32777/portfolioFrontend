import React from 'react'
import { PostCard } from './PostCard'
import { IPost } from '../../interfaces/contentInterfaces/posts/IPost'

interface IPropsPosts {
    posts: Array<IPost>
}

export const PostList: React.FC<IPropsPosts> = ({ posts }) => {
    if (!posts.length) {
        return <p className="center">Постов пока нет</p>
    }
    return (
        <div>
            {
                posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index} />
                    )
                })
            }
        </div>
    )


}