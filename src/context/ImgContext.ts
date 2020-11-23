import { createContext } from 'react'

function noop (newImg: string) {}

export const ImgContext = createContext({
    img: '',
    changeHeaderImg: noop
})                                            