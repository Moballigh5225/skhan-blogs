import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-04-12",
  useCdn: true,
});

export const fetchData = async () => {
  try {
    // Fetch books
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

    // Fetch poetry
    const poetry = await client.fetch(`
      *[_type == "poetry"]{
        _id,
        title,
        titleUrdu,
        day,
        month,
        year,
        author->{
          _id,
          name
        },
        "richText": richText[]{
          ...,
        },
        "richTextUrdu": richTextUrdu[]{
          ...,
        },
        "featuredImage": featuredImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `);

    // Fetch book reviews
    const bookReviews = await client.fetch(`
      *[_type == "bookReview"]{
        _id,
        title,
        titleUrdu,
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
        },
        "contentUrdu": contentUrdu[]{
          ...,
        },
        "coverImage": coverImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }
    `);

    // Fetch articles and include file upload field
    const articles = await client.fetch(`
      *[_type == "articles"]{
        _id,
        title,
        titleUrdu,
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
        },
        "contentUrdu": contentUrdu[]{
          ...,
        },
        "featuredImage": featuredImage{
          asset->{
            _id,
            url
          },
          alt
        },
        "file": file{
          asset->{
            url
          }
        }
      }
    `);

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
