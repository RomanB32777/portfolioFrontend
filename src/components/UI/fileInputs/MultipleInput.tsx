import React from 'react'

interface IMiltipleFileInput {
    required: boolean,
    placeholder: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export const MultipleFileInput: React.FC<IMiltipleFileInput> = ({ placeholder, required, onChange }) => {
    return (

        <div className="file-field input-field">
            <div className="btn">
                <span>+</span>
                <input
                    className="post-control"
                    type="file"
                    multiple
                    onChange={onChange}
                    required={required}
                    name="file2"
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}
