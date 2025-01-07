import Heading from '@/components/Heading'
import { readFile } from 'node:fs/promises'
import { marked } from 'marked'
import matter from "gray-matter"

export default async function DiabloPage() {
    const text = await readFile('./content/reviews/diablo.md', 'utf-8')
    const { content, data: {title,date,image}} = matter(text)
    const html = marked(content)

    return (
        <>
            <Heading>{title}</Heading>
            <p className='italic pb-2'>{date}</p>
            <img src={image} alt={`Image de ${title}`} className='mb-4 rounded w-screen mx-auto' />
            <article dangerouslySetInnerHTML={{__html: html}} className='prose w-full max-w-none'/>
        </>
    )
}