import React from 'react'
import { Loader } from './Loader'

// interface IAppLoader {
//     display: boolean
// }

export const AppLoader: React.FC = () => {

    return (
        <div className="loadingApp">
           <div className="preloader-center">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-yellow-only">
                    <div className="circle-clipper left">
                        <div className="circle" />
                    </div>
                    <div className="gap-patch">
                        <div className="circle" />
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}