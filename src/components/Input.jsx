import React from 'react'

export default function Input({value, setValue, label}){
    return(
        <>
            <label className="block mb-2">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="p-2 border rounded w-full mb-4"
            />
        </>
    )
}