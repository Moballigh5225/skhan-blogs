import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'poetry',
  title: 'Poetry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(150),
    }),
    defineField({
      name: 'author', // Reference to the Author schema
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'number', // Numeric day field
      validation: (Rule) => Rule.required().min(1).max(31),
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string', // String month field
      options: {
        list: [
          {title: 'January', value: 'January'},
          {title: 'February', value: 'February'},
          {title: 'March', value: 'March'},
          {title: 'April', value: 'April'},
          {title: 'May', value: 'May'},
          {title: 'June', value: 'June'},
          {title: 'July', value: 'July'},
          {title: 'August', value: 'August'},
          {title: 'September', value: 'September'},
          {title: 'October', value: 'October'},
          {title: 'November', value: 'November'},
          {title: 'December', value: 'December'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number', // Numeric year field
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'blockContent', // For rich text editing
      validation: (Rule) => Rule.required(),
    }),
  ],
})
