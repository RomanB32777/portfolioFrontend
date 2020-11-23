import { ActionType } from '../context/reducer/types';
import { ReducerContext } from '../context/reducer/reducerContext';
import { useAlert } from './../components/alert';
import { useHttp } from './http.hook';
import { useCallback, useState, useEffect, useContext } from 'react'
import { IUser } from '../interfaces/contentInterfaces/users/IUser';

export const storageName = 'userData'

export const useAuth = () => {
    const { dispatch } = useContext(ReducerContext)
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState('')
    const { req } = useHttp()
    const alert = useAlert()

    const login = useCallback((user: IUser) => {
        dispatch({
            type: ActionType.SetIsAuthenticated,
            payload: { user }
        })
        localStorage.setItem(storageName, JSON.stringify(user))
        // if (user.token)
        //     setToken(user.token)
    }, [])

    const update = useCallback((props: any) => {
        const user = (localStorage.getItem(storageName))?.toString()
        if (user) {
            const data = JSON.parse(user)
            const updateData = { ...data, ...props }
            localStorage.setItem(storageName, JSON.stringify(updateData))
        }
    }, [])

    const logout = useCallback(() => {
        dispatch({
            type: ActionType.LogOut,
            payload: {}
        })
        alert("Вы вышли из аккаунта")
        localStorage.removeItem(storageName)
        // setToken('')
    }, [])

    const isAuth = useCallback(async (token: string) => {
        const auth = await req('http://localhost:3040/api/auth/dashboard', 'GET', null, {
            Authorization: `Bearer ${token}`
        })
        if (auth.data.message) {
            alert(auth.data.message)
            setToken('')
            return false
        }
        return true
    }, [req])

    // когда приложение загружается, то по умолчанию данный хук смотрел есть ли в localstorage данные, и если они есть, то он сам их автоматически записал в локальное состояние из localstorage

    useEffect(() => {
        const user = (localStorage.getItem(storageName))?.toString()
        if (user) {
            const data = JSON.parse(user)
            isAuth(data.token)
                .then((isLogin) => {
                    (data && data.token && isLogin) ? login(data) : logout()
                     setReady(true)
                    //setToken[token]
                })
                .catch(() => setReady(true))
        }
        else {
            setReady(true)
        }
    }, [login, isAuth])
    return { login, logout, update, ready }
}