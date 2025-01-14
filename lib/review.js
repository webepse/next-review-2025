import { readdir, readFile } from 'node:fs/promises'
import {marked} from 'marked'
import matter from "gray-matter"
import qs from 'qs'

const CMS_URL = 'http://localhost:1337'

export async function getFeatureReview() 
{
    const reviews = await getReviews()
    return reviews[0]
}

export async function getReview(slug) {
    const url = `${CMS_URL}/api/reviews?` + qs.stringify({
        filters: {slug: { $eq: slug }},
        fields: ['slug','title','subtitle','publishedAt','body'],
        populate: { image: {fields: ['url']}},
        pagination: { pageSize: 1, withCount: false}
       },{ encodeValuesOnly: true})
    const response = await fetch(url)
    const {data} = await response.json()
    const review = data[0]
    return {
        slug: review.slug,
        title: review.title,
        data: review.publishedAt.slice(0,'yyyy-mm-dd'.length),
        image: CMS_URL + review.image.url,
        body: marked(review.body)
    }
}

export async function getSlugs() {
    const files = await readdir('./content/reviews')
    return files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -'.md'.length))
}

export async function getReviews() {
   const url = `${CMS_URL}/api/reviews?` + qs.stringify({
    fields: ['slug','title','subtitle','publishedAt'],
    populate: { image: {fields: ['url']}},
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 6}
   },{ encodeValuesOnly: true})
   console.log(url)
   const response = await fetch(url)
   const {data} = await response.json()
   console.log(data)
   return data.map((review) => ({
    slug: review.slug,
    title: review.title,
    data: review.publishedAt.slice(0,'yyyy-mm-dd'.length),
    image: CMS_URL + review.image.url
   }))
}