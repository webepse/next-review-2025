import Link from "next/link";

export default function ReviewsPage(){
    return (
        <>
            <h1>Reviews</h1>
            <p>Here we'll list all the reviews</p>
            <ul>
                <li><Link href="/reviews/diablo">Diablo IV</Link></li>
                <li><Link href="/reviews/spider-man">SpiderMan</Link></li>
            </ul>
        </>
    )
}