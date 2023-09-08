export default {
    name: "course",
    type: "document",
    title: "Course",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        }, 
        {
            name: "tag",
            type: "string",
            title: "Tag"
        },
        {
            name: "excerpt",
            type: "string",
            title: "Excerpt"
        },
        {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "poster",
            type: "image",
            title: "Poster"
        } ,
        {
            name: "link",
            type: "string",
            title: "Link"
        }
    ]
}