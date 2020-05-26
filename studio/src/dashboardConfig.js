export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ecc8e9d2396fe7601c237bd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fjomm1gw',
                  apiId: '2c375bcd-10af-4417-be35-a5c0a3a38c55'
                },
                {
                  buildHookId: '5ecc8e9e9424d3fb467fcdd8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wrtd93uh',
                  apiId: 'cc4ec79c-4017-4bf4-9648-f90921ca14ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lnx1337/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wrtd93uh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
