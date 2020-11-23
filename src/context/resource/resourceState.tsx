import React from 'react'
import { ResourceContext } from './resourceContext'
import { useResource } from './resource'


export const ResourceState: React.FC = ({ children }) => {
    const resource = useResource()
    
    return (
        <ResourceContext.Provider value={{ resource }}>
            {children}
        </ResourceContext.Provider>
    )
}