// sanity.js
//import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
import {createClient} from 'https://esm.sh/@sanity/client'
import imageUrlBuilder from 'https://esm.sh/@sanity/image-url'

function urlFor(source) {
    return builder.image(source)
}

export const client = createClient({
  projectId: '3ai46ukt',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);

//let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
let COURSENAME = sessionStorage.getItem("course_name");
console.log(COURSENAME)

const result = await client.fetch(`*[_type=="course" && title=="${COURSENAME}"]`);
console.log(result)

document.getElementById("course-tag").textContent = result[0].tag;
let desc = result[0].description;
let poster = result[0].poster;
desc = desc.replaceAll("  ", "<br>")
document.getElementById("course-desc").innerHTML = desc; 
document.getElementById("created_time").textContent = new Date(Date.parse(result[0]._createdAt));
document.getElementById("course_title").textContent = result[0].title;
document.getElementById("course-img").src = `${urlFor(poster).url()}`;
document.getElementById("course-link").href = result[0].link;