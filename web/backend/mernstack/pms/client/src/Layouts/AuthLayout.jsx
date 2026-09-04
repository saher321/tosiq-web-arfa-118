import React from 'react'
import { APP_NAME_LC } from '../utils/strings.js'

const AuthLayout = ({ children }) => {

    return (
        <div>
            <div className='m-5 text-amber-600 font-bold italic'>
                {APP_NAME_LC}
            </div>
            
        <div className='mx-auto max-w-sm'>
            { children }
        </div>
        </div>
    )
}

export default AuthLayout
