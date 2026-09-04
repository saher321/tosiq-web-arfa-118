import React from 'react'

const AuthLayout = ({ children }) => {

    return (
        <div>
            <div className='m-5 text-amber-600 font-bold italic'>
                pms
            </div>
            
        <div className='mx-auto max-w-sm'>
            { children }
        </div>
        </div>
    )
}

export default AuthLayout
