import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'bookReview',
  title: 'Book Review',
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
      name: 'content',
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
      name: 'contentUrdu',
      title: 'Content (اردو)',
      type: 'blockContent',
      description: 'Urdu body — will be displayed when reader selects Urdu',
    }),

    // ── Featured Image ────────────────────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Cover Image (Featured)',
      type: 'image',
      description: 'Recommended resolution: 1200 × 630 px (16:9). Shown on cards and at the top of the review.',
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
      validation: (Rule) => Rule.required(),
    }),

    // ── Book Meta ─────────────────────────────────────────────
    defineField({
      name: 'author',
      title: 'Book Author',
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
      name: 'publishedBy',
      title: 'Published By',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'totalPages',
      title: 'Total Pages',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
  ],
})
