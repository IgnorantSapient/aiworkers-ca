import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main',
  clientId: process.env.TINA_CLIENT_ID || 'local',
  token: process.env.TINA_TOKEN || 'local',
  client: { skip: !process.env.TINA_CLIENT_ID || !process.env.TINA_TOKEN },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public'
    }
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'SEO Description', ui: { component: 'textarea' }, required: true },
          { type: 'datetime', name: 'publishDate', label: 'Publish Date', required: true },
          { type: 'string', name: 'author', label: 'Author' },
          { type: 'string', name: 'category', label: 'Category' },
          { type: 'string', name: 'seoKeywords', label: 'GEO / SEO Keywords', list: true },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true }
        ]
      },
      {
        name: 'caseStudies',
        label: 'Case Studies',
        path: 'src/content/case-studies',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'industry', label: 'Industry', required: true },
          { type: 'string', name: 'result', label: 'Primary Result', required: true },
          { type: 'datetime', name: 'publishDate', label: 'Publish Date', required: true },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true }
        ]
      },
      {
        name: 'services',
        label: 'Service Pages',
        path: 'src/content/services',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'outcome', label: 'Business Outcome', required: true },
          { type: 'string', name: 'icon', label: 'Icon' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true }
        ]
      }
    ]
  }
});
