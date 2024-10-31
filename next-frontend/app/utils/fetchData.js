import { createClient } from "next-sanity";

const client = createClient({
  projectId: "kcnfqu28", // Replace with your actual project ID
  dataset: "production", // The dataset name
  apiVersion: "2022-03-07", // Sanity API version
  useCdn: true,
});

export const fetchData = async () => {
  try {
    const books = await client.fetch(`
      *[_type == "book"]{
        _id,
        title,
        "coverImage": coverImage {
          asset->{
            _id,
            url
          },
          alt
        },
        downloadLink,
        buyLink,
        price,
        "author": author->{
          _id,
          name
        },
        "description": description[]{
          ...,
        }
      }
    `);

    const poetry = await client.fetch(`
      *[_type == "poetry"]{
        _id,
        title,
        day,       
        month,     
        year,      
        author->{
          _id,
          name
        },
        "richText": richText[] {  
          ...,
        }
      }
    `);

    const bookReviews = await client.fetch(`
      *[_type == "bookReview"]{
        _id,
        title,
        author,
        edition,
        publishedBy,
        totalPages,
        "reviewedBy": reviewedBy->{
          _id,
          name
        },
        "content": content[]{
          ...,
        }
      }
    `);

    const articles = await client.fetch(`
      *[_type == "articles"]{
        _id,
        title,
        day,
        month,
        year,
        _createdAt,
        _updatedAt,
        "author": author->{
          _id,
          name
        },
        "content": content[]{
          ...,
        }
      }
    `);

    console.log("Fetched books:", books);
    console.log("Fetched poetry:", poetry);
    console.log("Fetched book reviews:", bookReviews);
    console.log("Fetched articles:", articles);

    return {
      books: books || [],
      poetry: poetry || [],
      bookReviews: bookReviews || [],
      articles: articles || [],
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      books: [],
      poetry: [],
      bookReviews: [],
      articles: [],
    };
  }
};
