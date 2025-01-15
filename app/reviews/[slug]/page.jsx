import Heading from '@/components/Heading'
import ShareButtons from '@/components/ShareButtons';
import { getReview, getSlugs } from '@/lib/review';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// pour générer statiquement les pages au moment de la construction
export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({slug}))
}

export async function generateMetadata(props) 
{
    const {slug} = await props.params
    const review = await getReview(slug)
    if(!review)
    {
        notFound()
    }
    return {
        title: review.title
    }
}

export default async function ReviewPage({params}) {
    const { slug } = await params;
    const review = await getReview(slug)
    if(!review)
    {
        notFound()
    }
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='font-semibold pb-3'>{review.subtitle}</p>
            <div className="flex gap-3 items-baseline">
                <p className='italic pb-2'>{review.date}</p>
                <ShareButtons />
            </div>
            <Image src={review.image} alt={`Image de ${review.title}`} className='mb-4 rounded w-screen mx-auto' width="640" height="360" priority />
           
            <article dangerouslySetInnerHTML={{__html: review.body}} className='prose w-full max-w-none'/>
        </>
    )
}