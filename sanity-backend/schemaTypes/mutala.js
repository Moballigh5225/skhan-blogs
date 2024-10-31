import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'mutala',
  title: 'Mutala',
  type: 'document',
  fields: [
    defineField({
      name: 'bookName',
      title: 'Book Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'publisherName',
      title: 'Publisher Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'yearOfPublication',
      title: 'Year of Publication',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD', // Full date format
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bookWriterName',
      title: 'Book Writer Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hasilEMutala',
      title: 'Hasil e Mutala',
      type: 'blockContent', // Rich text editor
      validation: (Rule) => Rule.required(),
    }),
  ],
})
