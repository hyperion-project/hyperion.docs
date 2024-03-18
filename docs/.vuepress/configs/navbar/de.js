export const navbar_DE = [
  {
    text: 'Handbuch',
    children: [
      {
        text: 'Anleitungen',
        children: [
          '/de/user/Introduction.md',
          '/de/user/Installation.md',
          '/de/user/Configuration.md',
          {
            text: 'LED Hardware',
            link: '/user/leddevices/Overview.md'
          },
          '/de/user/HyperBian.md'
        ]
      },
      {
        text: 'Für Fortgeschrittene',
        children: [
          '/de/user/advanced/Advanced.md',
          '/de/user/advanced/CLI.md',
          '/de/user/advanced/Support.md',
          '/de/user/advanced/Testing.md'
        ]
      }
    ]
  },
  {
    text: 'Effekte',
    children: [
      {
        text: 'Allgemeines',
        children: [
          '/de/effects/Effects.md',
          '/de/effects/API.md',
          '/de/effects/OurFirstEffect.md'
        ]
      },
      {
        text: 'Effekt UI',
        children: [
          '/de/api/Ui.md'
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
          '/de/json/JSON.md',
          '/de/json/ServerInfo.md',
          '/de/json/Control.md',
          '/de/json/Authentication.md',
          '/de/json/Subscribe.md'
        ]
      },
      {
        text: 'Sonstiges',
        children: [
          '/de/api/Detect.md',
          '/de/api/Guidelines.md'
        ]
      }
    ]
  }
]