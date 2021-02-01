import React from 'react'
import { IImage } from '../../interfaces/contentInterfaces/images/IImage'

interface IPropsPhotos {
    files: Array<IImage>,
    deletePhoto(type: string, id: string): void
}

export const Photos: React.FC<IPropsPhotos> = ({ files, deletePhoto }) => {

    if (!files) return <p>файлы не найдены</p>
    return (
        <div className="img-container create-img__multiple">
            {files && files.map((file, index) => {
                return (
                    <div key={index} className="img-container__single">
                        <img className="responsive-img"  src={file.path} alt="" />
                        <a className="btn-floating btn-small waves-effect waves-light red"
                        onClick={() => deletePhoto('galleryPost', file._id)}
                        >x</a>
                    </div>
                )
            })
            }

        </div>
    )
}