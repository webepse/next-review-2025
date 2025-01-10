import { useState } from 'react'
import { LinkIcon } from '@heroicons/react/24/outline'

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
            className='flex gap-1 border placeholder:border px-2 py-1 my-3 rounded text-slate-500 text-sm hover:bg-orange-300 hover:text-slate-700'
        >
            <LinkIcon className='h-4 w-4' />
            {clicked ? 'Link copied!' : 'Share Link'}
        </button>
    )
}