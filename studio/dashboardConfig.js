export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe785b5823575628b6a3fb5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xt3s8vyx',
                  apiId: 'b36298c2-9868-458f-aaa0-53ede60f077b'
                },
                {
                  buildHookId: '5fe785b653b9a342c500ee60',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xobpucg1',
                  apiId: '1cce06b0-5965-4895-b6a6-4e2ef60564f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luangarcia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xobpucg1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
