import Heading from '@/components/Heading'
import { getReview, getSlugs } from '@/lib/review';

// pour générer statiquement les pages au moment de la construction
export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({slug}))
}


export default async function ReviewPage({params}) {
    const { slug } = await params;
    const review = await getReview(slug)
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='italic pb-2'>{review.date}</p>
            <img src={review.image} alt={`Image de ${review.title}`} className='mb-4 rounded w-screen mx-auto' />
            <article dangerouslySetInnerHTML={{__html: review.body}} className='prose w-full max-w-none'/>
        </>
    )
}