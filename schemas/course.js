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
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
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