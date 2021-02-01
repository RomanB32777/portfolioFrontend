import React from 'react'
import { Link } from 'react-router-dom'
import background1 from '../../img/background1.jpg'
import { IPost } from '../../interfaces/contentInterfaces/posts/IPost'

type Props = {
    // some: ISome[],
    // onToggle?(id: number): void,
    // onRemove?: (id: number) => void
    post: IPost
}

export const PostCard: React.FC<Props> = ({post}) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    {post.img && <img src={post.img.path} />}
                    <span className="card-title"> {post.title}</span>
                </div>
                <div className="card-content">
                    <p>{post.body}</p>
                    {post.owner && <p>Owner: {post.owner.name} </p> }
                </div>
                <div className="card-action">
                    <Link to={`/post/${post._id}`}>link</Link>
                </div>
            </div>
        </div>
    )
}