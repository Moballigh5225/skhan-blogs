// schemas/author.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'A short biography of the author.',
      validation: (Rule) => Rule.max(1000).warning('Too long'),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
    // You can add more fields as needed, such as social media links
  ],
})
