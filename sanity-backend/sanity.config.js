import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SkhanBlog',

  projectId: 'kcnfqu28', // Hard-coded project ID
  dataset: 'production', // Hard-coded dataset

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
