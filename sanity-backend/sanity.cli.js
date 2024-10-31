import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kcnfqu28', // Hard-coded project ID
    dataset: 'production', // Hard-coded dataset
  },
  autoUpdates: true,
})
