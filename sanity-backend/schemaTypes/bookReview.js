import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'bookReview', // Correct name for the schema
  title: 'Book Review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(150),
    }),
    defineField({
      name: 'author', // Simple string field for book's author name
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'edition',
      title: 'Edition',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedBy', // Changed to a simple string field
      title: 'Published By',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewedBy', // Reference to a reviewer (same as Author in other schema)
      title: 'Reviewed By',
      type: 'reference',
      to: [{type: 'author'}], // Reference to an 'author' type
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'totalPages',
      title: 'Total Pages',
      type: 'string', // String field for total number of pages
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'content', // Rich text field for review content
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage', // Image field for the book cover
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
