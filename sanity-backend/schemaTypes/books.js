import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title', // Title field at the top
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'author', // Reference to the Author schema
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'A description of the image for accessibility.',
          validation: (Rule) => Rule.required().min(1).max(150),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent', // Uses rich text
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}).error('Must be a valid URL'),
    }),
    defineField({
      name: 'buyLink',
      title: 'Buy Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}).error('Must be a valid URL'),
    }),
  ],
})
