import React, { useEffect } from 'react'

interface ISelect {
    value: any,
    options: Array<any>,
    required: boolean,
    onChange(e: React.ChangeEvent<HTMLSelectElement>): void
}

export const Select: React.FC<ISelect> = ({ value, options, required, onChange }) => {
    useEffect(() => {
        $(document).ready(function () {
            $('select').formSelect();
        });
    }, [])

    return (
        <select
            value={value}
            onChange={onChange}
            required={required}
        >
            <option value="" disabled>Выберите</option>
            {options.map((option, index) => {
                return (
                    <option key={index} value={option.value}>{option.name}</option>
                )
            })
            }
        </select>
    )

}
