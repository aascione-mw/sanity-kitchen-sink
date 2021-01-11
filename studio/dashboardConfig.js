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
                  buildHookId: '5ffc5de12b73fc34c2916008',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9y63ffxt',
                  apiId: '7b168e1b-4197-4b27-8686-ee8db9e0bfa0'
                },
                {
                  buildHookId: '5ffc5de110a438bdd3c9260d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rmdhfugu',
                  apiId: '39488d2a-8227-478b-9169-b99b4875e04d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aascione-mw/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rmdhfugu.netlify.app', category: 'apps'}
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
