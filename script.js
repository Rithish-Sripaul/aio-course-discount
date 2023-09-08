import imageUrlBuilder from 'https://esm.sh/@sanity/image-url'
import {createClient} from 'https://esm.sh/@sanity/client'
let PROJECT_ID = "3ai46ukt";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "course"]');

export const client = createClient({
  projectId: '3ai46ukt',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source)
}

let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

fetch(URL)
    .then((res) => res.json())
    .then(({result}) => {
        let count = 1;
        if (result.length > 0) {
            console.log("result");
            result.forEach((cour) => {
                document.getElementById("courses_sidebar").innerHTML += `<article class="blog_style1">
                <div class="blog_img">
                    <img class="img-fluid" src=${urlFor(cour?.poster).url()} alt="">
                </div>
                <div class="blog_text">
                    <div class="blog_text_inner">
                        <div class="cat">
                            <a class="cat_btn" href="#">${cour?.tag}</a>
                            <a href="#"># ${count}</a>
                        </div>.
                        <a href="single-blog.html" onclick="sessionStorage.setItem('course_name','${cour?.title}')"><h4>${cour?.title}</h4></a>
                        <p>${cour?.excerpt}</p>
                        <a class="blog_btn" href="#">Read More</a>
                    </div>
                </div>
            </article>`;
            count += 1;
            })
            
        }
    }).catch((err) => console.error(err));