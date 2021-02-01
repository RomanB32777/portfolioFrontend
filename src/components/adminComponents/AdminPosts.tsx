import React, { useEffect, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../UI/loaders/Loader';
import { Link } from 'react-router-dom';
import { ReducerContext } from '../../context/reducer/reducerContext';
import { ActionType } from '../../context/reducer/types';
import { IPost } from '../../interfaces/contentInterfaces/posts/IPost';

interface IPropsAdminPosts {
    posts: Array<IPost>
}

const AdminPosts: React.FC<IPropsAdminPosts> = ({ posts }) => {
    const { req } = useHttp()
    const { dispatch, showLoader, hideLoader } = useContext(ReducerContext)

    const deletePosts = async (id: string) => {
        try {
            showLoader()
            const { data } = await req(`http://localhost:3040/api/post/delete/${id}`, 'DELETE')
            console.log(data);
            dispatch({
                type: ActionType.DeletePost,
                payload: {
                    post: {
                        _id: id
                    }
                }
            })
            hideLoader()
        } catch (error) {
            hideLoader()
            console.log(error); 
        }

    }

    if (posts.length === 0) return <p>Постов пока нет</p>

    return (
        <table className=" highlight centered">
            <thead>
                <tr>
                    <th>Пост</th>
                    <th>Заголовок</th>
                    <th>Текст</th>
                    <th>Автор</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
            </thead>

            <tbody>
                {posts && posts.map((post, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.owner.name}</td>
                            <td><Link className="waves-effect waves-light blue btn" to={"/admin/edit-post/" + post._id}>&#9998;</Link></td>
                            <td><a className="waves-effect waves-light red btn hoverable" onClick={() => {
                                post._id && deletePosts(post._id)
                            }}>X</a></td>
                        </tr>
                    )
                })
                }

            </tbody>
        </table>
    )
}

export default AdminPosts