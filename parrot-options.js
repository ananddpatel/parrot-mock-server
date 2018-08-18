module.exports = {
  seed: [
    {
      route: '/user',
      squack: {
        id: 0123,
        firstName: 'Anand',
        lastName: 'Patel'
      },
      alias: 'User call 1'
    },
    {
      route: '/system',
      squack: {
        'hello world':
          'mock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock systemmock system'
      },
      alias: 'System call 1'
    },
    {
      route: '/user2',
      squack: {
        id: 0123,
        firstName: 'Anand',
        lastName: 'Patel'
      },
      group: 'AVA'
    },
    {
      route: '/system2',
      squack: {
        'hello world': 'mock system'
      },
      group: 'AVA'
    },
    {
      route: '/user3',
      squack: {
        id: 0123,
        firstName: 'Anand',
        lastName: 'Patel'
      },
      group: 'AVA'
    },
    {
      route: '/system3',
      squack: {
        'hello world': 'mock system'
      },
      group: 'Glass'
    },
    {
      route: '/user4',
      squack: {
        id: 0123,
        firstName: 'Anand',
        lastName: 'Patel'
      },
      group: 'Glass'
    },
    {
      route: '/system4',
      squack: {
        'hello world': 'mock system'
      },
      group: 'Something'
    }
  ]
};
