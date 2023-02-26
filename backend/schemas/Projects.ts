export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'projectName',
      type: 'string',
      title: 'ProjectName',
    },
    {
      name: 'techStack',
      type: 'array',
      of: [
        {
          name: 'name',
          type: 'string',
        },
      ],
      // title: 'TechStack'
    },
    {
      name: 'qrImage',
      type: 'image',
      title: 'QRImage',
    },
    {
      name: 'projectLink',
      type: 'string',
      title: 'ProjectLink',
    },
    {
      name: 'snippetVideoLink',
      type: 'string',
      title: 'SnippetVideoLink',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
}
