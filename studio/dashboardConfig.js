export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '610db9da4f319f4209fce887',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nat18scs',
                  apiId: '6fd5e10f-37c1-4105-a65b-aeb2e5e274a1'
                },
                {
                  buildHookId: '610db9da45f65d41483f20c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e7v8wvek',
                  apiId: '5eeb0fc1-d8fc-4182-82df-5e541a878c1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miketaart/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e7v8wvek.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
