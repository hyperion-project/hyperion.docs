export const navbar_EN = [
  {
    text: 'User',
    children: [
      {
        text: 'General',
        children: [
          '/user/Introduction.md',
          '/user/Installation.md',
          '/user/Configuration.md',
          {
            text: 'LED Hardware',
            link: '/user/leddevices/Overview.md'
          },
          '/user/HyperBian.md'
        ]
      },
      {
        text: 'Advanced',
        children: [
          '/user/advanced/Advanced.md',
          '/user/advanced/CLI.md',
          '/user/advanced/Support.md',
          '/user/advanced/Testing.md'
        ]
      }
    ]
  },
  {
    text: 'Effects',
    children: [
      {
        text: 'Effects',
        children: [
          '/effects/Effects.md',
          '/effects/API.md',
          '/effects/OurFirstEffect.md'
        ]
      },
      {
        text: 'Effects UI',
        children: [
          '/api/Ui.md'
        ]
      }
    ]
  },
  {
    text: 'Json API',
    children: [
      {
        text: 'JSON',
        children: [
          '/json/JSON.md',
          '/json/ServerInfo.md',
          '/json/Control.md',
          '/json/Authentication.md',
          '/json/Subscribe.md'
        ]
      },
      {
        text: 'Misc',
        children: [
          '/api/Detect.md',
          '/api/Guidelines.md'
        ]
      }
    ]
  }
]