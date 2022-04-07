import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'


 const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true,
  apiVersion:'2021-10-21',
  token: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN,
  // `false` if you want to ensure fresh data
}

export const client = createClient(config);
export const urlFor = source => createImageUrlBuilder(config).image(source);
