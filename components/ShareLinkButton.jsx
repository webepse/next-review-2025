'use client'

import { useState } from 'react'
export default function ShareLinkButton() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        console.log('clicked')
        setClicked(true)
        setTimeout(() => setClicked(false),1500)
    }
    return (
        <button 
            onClick={handleClick}
            className='border px-2 py-1 my-3 rounded text-slate-500 text-sm hover:bg-orange-300 hover:text-slate-700'
        >
            {clicked ? 'Link copied!' : 'Share Link'}
        </button>
    )
}