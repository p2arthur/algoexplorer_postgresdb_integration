import React from 'react'

function Button({ children }) {

    return <button className="p-2 border-2 rounded hover:bg-gray-50 transition-all">{children}</button>


}


export default Button