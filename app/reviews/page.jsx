import Link from "next/link";
import Heading from '@/components/Heading'

export default function ReviewsPage(){
    return (
        <>
            <Heading>Reviews</Heading>
            <p>Here we'll list all the reviews</p>
            <ul>
                <li><Link href="/reviews/diablo">Diablo IV</Link></li>
                <li><Link href="/reviews/spider-man">SpiderMan</Link></li>
            </ul>
        </>
    )
}