import React, { useContext } from 'react'
import { Loader } from '../../UI/loaders/Loader'
import { IAppInfo } from '../../../pages/Admin'
import AdminPosts from '../AdminPosts'
import { ReducerContext } from '../../../context/reducer/reducerContext'
import { IPost } from '../../../interfaces/contentInterfaces/posts/IPost'

interface IPropsPostsAdminPage {
    loading: boolean,
    posts: Array<IPost>
}

export const PostsAdminPage: React.FC<IPropsPostsAdminPage> = ({ loading, posts }) => {
    const { state } = useContext(ReducerContext)
    console.log(state);
    
    return (
        <div>
            {loading && <Loader />}

            {!loading &&  state.posts &&
                <div>
                    {!posts.length ? <p>Постов пока нет</p> : <AdminPosts posts={state.posts.filter((post: any) => (post.status === 'created')
                    )} />}
                </div>
            }
        </div>
    )
}