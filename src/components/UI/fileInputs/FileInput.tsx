import React from 'react'

interface IFileInput {
    required: boolean,
    placeholder: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export const FileInput: React.FC<IFileInput> = ({  placeholder, onChange, required }) => {
    return (

        <div className="file-field input-field">
            <div className="btn">
                <span>+</span>
                <input
                    className="post-control validate"
                    type="file"
                    name="file"
                    id="file"
                    onChange={onChange}
                    required={required}
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" placeholder={placeholder} type="text" />
            </div>
        </div>
    )
}

