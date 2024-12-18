'use client'
import Heading from '@/components/Heading'

import { useEffect } from "react"

export default function HomePage() {
   
    console.log('HomePage [Rending]')
    return (
        <>
            <Heading>My Games</Heading>
            <p>
                Only the best games, reviewed for you.
            </p>
        </>
    )
}