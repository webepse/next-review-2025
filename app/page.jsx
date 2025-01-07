import Heading from '@/components/Heading'
import Link from 'next/link'
import { getFeatureReview } from '@/lib/review'

export default async function HomePage() {
   const review = await getFeatureReview()
    // console.log('HomePage [Rending]')
    console.log(review)
    return (
        <>
            <Heading>My Games</Heading>
            <p>
                Only the best games, reviewed for you.
            </p>
            <div className="border rounded shadow hover:shadow-xl w-80 bg-slate-50">
                <Link href={`/reviews/${review.slug}`}>
                    <img src={review.image} alt={`image de ${review.title}`} className="rounded-t" />
                    <h2 className="font-orbitron font-semibold py-1 text-center">{review.title}</h2>
                </Link>
            </div>

        </>
    )
}