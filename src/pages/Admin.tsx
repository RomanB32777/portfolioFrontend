import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Switch, Route, Link } from 'react-router-dom'
import { useAuth } from '../hooks/auth.hook'
import { AdminMain } from '../components/adminComponents/AdminMain'
import { CreateAdminPosts } from '../components/adminComponents/adminPages/CreateAdminPosts'
import { PostsAdminPage } from '../components/adminComponents/adminPages/PostsAdminPage'
import { ReducerContext } from '../context/reducer/reducerContext'
import { IPost } from '../interfaces/contentInterfaces/posts/IPost'

export interface IAdmin {
    name: string,
    posts?: Array<IPost>,
    _id: string,
    email: string
    password: string
}

export interface IAppInfo {
    admin: IAdmin,
    posts: any
    users: any
}

export const Admin = () => {
    const { req, loading } = useHttp()
    const { logout } = useAuth()
    const { state, showLoader, hideLoader } = useContext(ReducerContext)

    const [info, setInfo] = useState({} as IAppInfo)
    const [ready, setReady] = useState(false)



    const getAppInfo = useCallback(async () => {
        try {
            showLoader()
            const { data } = await req('http://localhost:3040/api/auth/admin', 'GET', null, {
                Authorization: `Bearer ${state.user?.token}`
            })
            console.log("info", data);
            hideLoader()
            if (data.message) {
                logout()
            } else {
                const userInfo: IAppInfo = data
                // if (userInfo.posts)
                //     for (const post of userInfo.posts) {
                //         const { data } = await req(`http://localhost:3040/api/post/${post._id}`, 'GET')
                //         adminPosts.push(data)
                //     }
                setInfo({ ...data })
                // dispatch({
                //     type: ActionType.SetPosts,
                //     payload: {
                //         posts: {...data.posts}
                //     }
                // })
            }
        } catch (error) {
            hideLoader()
            console.log(error);
        }

    }, [req])

    useEffect(() => {
        getAppInfo()
        setReady(true)
    }, [getAppInfo])


    return (
        <div className="container">
            <h1>info</h1>
            <ul>
                <li><Link to="/admin">main</Link></li>
                <li><Link to="/admin/posts">posts</Link></li>
                <li><Link to="/admin/create-post">create post</Link></li>
            </ul>
            <Switch>
                <Route path="/admin" exact>
                    {info.users && <AdminMain users={info.users} />}
                </Route>
                <Route path="/admin/posts">
                    {state.posts && <PostsAdminPage loading={loading} posts={state.posts} />}
                </Route>
                <Route path="/admin/create-post">
                    <CreateAdminPosts />
                </Route>
                <Route path="/admin/edit-post/:editPostId">
                    <CreateAdminPosts />
                </Route>
            </Switch>



        </div>
    )
}