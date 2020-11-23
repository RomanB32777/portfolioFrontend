//import { ReducerContext } from './../reducers/reducer';
import {
    useState,
    useCallback
} from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

type methodType = 'GET' | 'POST' | 'DELETE'
export const useHttp = () => {    
    const [loading, setLoading] = useState(false)

    const req = useCallback(async (url: string, method: methodType = 'GET', data = null, headers = {}): Promise<AxiosResponse> => {
        setLoading(true)

        try {
            if (data) {
                if (headers['Content-type'] !== 'multipart/post-data')
                    data = JSON.stringify(data)
            }
            const config: AxiosRequestConfig = {
                url,
                method,
                data,
                headers: { 
                    "Content-type": "application/json",
                    ...headers
                }
            }
            const fromDB = await axios(config)

            setLoading(false)
            //console.log('gg', fromDB);
            return fromDB

        } catch (error) {
            setLoading(false)
            throw error
        }
    }, [])

    return {
        loading,
        req
    }
} 