import React from 'react'

export default function Button(props) {
    return(
        <button className={`bg-red-600 text-white px-5 py-2 shadow-md rounded-sm ${props.extraClasses}`} {...props}>{props.children}</button>
    )
}