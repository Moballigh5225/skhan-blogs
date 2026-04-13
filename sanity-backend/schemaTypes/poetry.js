import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'poetry',
  title: 'Poetry',
  type: 'document',
  fields: [
    // ── English ──────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(150),
    }),
    defineField({
      name: 'richText',
      title: 'Content (English)',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),

    // ── Urdu ─────────────────────────────────────────────────
    defineField({
      name: 'titleUrdu',
      title: 'Title (اردو)',
      type: 'string',
      description: 'Urdu title — will be displayed when reader selects Urdu',
    }),
    defineField({
      name: 'richTextUrdu',
      title: 'Content (اردو)',
      type: 'blockContent',
      description: 'Urdu body — will be displayed when reader selects Urdu',
    }),

    // ── Featured Image ────────────────────────────────────────
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Recommended resolution: 1200 × 630 px (16:9). Shown on cards and inside the poem modal.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for accessibility.',
          validation: (Rule) => Rule.max(150),
        }),
      ],
    }),

    // ── Meta ─────────────────────────────────────────────────
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(31),
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
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
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    }),
  ],
})
