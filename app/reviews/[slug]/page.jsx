import Heading from '@/components/Heading'
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/review';

// pour générer statiquement les pages au moment de la construction
export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({slug}))
}

export async function generateMetadata(props) 
{
    const {slug} = await props.params
    const review = await getReview(slug)
    return {
        title: review.title
    }
}

export default async function ReviewPage({params}) {
    const { slug } = await params;
    const review = await getReview(slug)
    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-3 items-baseline">
                <p className='italic pb-2'>{review.date}</p>
                <ShareLinkButton />
            </div>
            <img src={review.image} alt={`Image de ${review.title}`} className='mb-4 rounded w-screen mx-auto' />
            <article dangerouslySetInnerHTML={{__html: review.body}} className='prose w-full max-w-none'/>
        </>
    )
}