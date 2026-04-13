import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kcnfqu28',
    dataset: 'production',
  },
  studioHost: 'skhan-blog',
  autoUpdates: true,
})
