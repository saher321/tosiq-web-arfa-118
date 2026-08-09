import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { GoAlertFill } from "react-icons/go";

const Home = () => {
  return (
    <WebLayout>
        <div className='bg-blue-200 p-3 rounded-lg text-sky-800'>
            <div className='flex items-center gap-3'>
                <GoAlertFill /> <span>Click on Users list to see the records</span>
            </div>
            {/* 
            useState
            useEffect
            useRef
            useContext (global) :: zustand

            useMemo
            useReducer
            useCallback

            customHooks (useToggle, useAuth, useTheme)
            */}
        </div>
    </WebLayout>
  )
}

export default Home
