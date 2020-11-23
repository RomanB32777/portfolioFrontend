import React, { useContext, useEffect, useState } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ProfilePage } from './pages/Profile'
import { PostPage } from './pages/Posts'
import { AboutPage } from "./pages/AboutMe";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ContactPage } from './pages/Contacts'
import { DetailPage } from "./pages/Detail";
import { Admin } from './pages/Admin'
import { useAuth } from './hooks/auth.hook'
import { Loader } from './components/UI/loaders/Loader'
import { ReducerContext } from './context/reducer/reducerContext'
import { ResourceContext } from './context/resource/resourceContext'
import { ActionType } from './context/reducer/types'
import { AppLoader } from './components/UI/loaders/AppLoader'


export const Routes: React.FC = () => {
    const { state, dispatch, showLoader, hideLoader } = useContext(ReducerContext)
    const { ready } = useAuth()
    const { resource } = useContext(ResourceContext)
    const posts = resource.loadPosts.read()
    const user = resource.loadUser.read()

    useEffect(() => {
        dispatch({
            type: ActionType.SetPosts,
            payload: {
                posts
            }
        })
        // dispatch({
        //     type: ActionType.SetIsAuthenticated,
        //     payload: { user }
        // })
        // console.log(user);

    }, [])

    // useEffect(() => {
    //     if (!ready)
    //         showLoader()
    //     else
    //         hideLoader()
    // }, [ready])

    if (!ready)
        return <Loader />
        
    return (
        <React.Fragment>
            {state.loading && <AppLoader />}
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                {(state.user && state.user.isAuthenticated) ? <Route path="/dashboard" >
                    <ProfilePage />
                </Route> : null}
                <Route path="/post/:id">
                    <DetailPage />
                </Route>
                <Route path="/posts">
                    <PostPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/contacts">
                    <ContactPage />
                </Route>
                {(state.user && state.user.isAuthenticated && state.user.status === 'admin') ? <Route path="/admin" >
                    <Admin />
                </Route> : null}
                <Redirect to="/" />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}


