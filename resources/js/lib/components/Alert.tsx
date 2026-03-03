import React from 'react'
import { useShowAlert } from '../hooks/useShowAlert';

interface AlertProps {
    message: string;
    error: string;
}

const Alert = ({message, error}: AlertProps) => {
    const [isShowAlert, setShowAlert, alertMessage] = useShowAlert(message);

  return (
    <>
    {isShowAlert && (
        <div className="mb-4 flex items-center p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 animate-fade-in" role="alert">
            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div>
                <span className="font-bold">Success!</span> {alertMessage}
            </div>
            <button onClick={() => setShowAlert(false)} className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8">
                <span className="sr-only">Close</span>
                X
            </button>
        </div>
    )}

    {error && (
        <div className="mb-4 p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50">
            {error}
        </div>
    )}</>
  )
}

export default Alert