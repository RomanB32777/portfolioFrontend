import { createContext } from 'react'

interface IResourceContext {
    resource: any
}

export const ResourceContext = createContext({} as IResourceContext)
