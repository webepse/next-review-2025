import Heading from '@/components/Heading'
import { readFile } from 'node:fs/promises'
import { marked } from 'marked'

export default async function DiabloPage() {
    const text = await readFile('./content/reviews/diablo.md', 'utf-8')
    const html = marked(text)

    return (
        <>
            <Heading>Diablo 4</Heading>
            <img src="/images/diablo.jpg" alt="Image de Diablo 4" className='mb-4 rounded w-screen mx-auto' />
            <article dangerouslySetInnerHTML={{__html: html}} />
        </>
    )
}