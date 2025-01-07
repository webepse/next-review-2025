import Heading from '@/components/Heading'
import { getReview } from '@/lib/review'

export default async function DiabloPage() {
    const review = await getReview('diablo')

    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='italic pb-2'>{review.date}</p>
            <img src={review.image} alt={`Image de ${review.title}`} className='mb-4 rounded w-screen mx-auto' />
            <article dangerouslySetInnerHTML={{__html: review.body}} className='prose w-full max-w-none'/>
        </>
    )
}