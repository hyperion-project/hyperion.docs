export const navbar_DE: any = [
  {
    text: 'Handbuch',
    items: [
      {
        text: 'Anleitungen',
        items: [
          { text: 'Einführung', link: '/de/user/Introduction.md' },
          { text: 'Erste Schritte', link: '/de/user/GettingStarted.md' },
          { text: 'Konfigurieren', link: '/de/user/Configuration.md' },
          { text: 'LED Hardware', link: '/de/user/leddevices/Overview.md' },
          { text: 'HyperBian', link: '/de/user/HyperBian.md' }
        ]
      },
      {
        text: 'Für Fortgeschrittene',
        items: [
          { text: 'Fortgeschritten', link: '/de/user/advanced/Advanced.md' },
          { text: 'Befehlszeile', link: '/de/user/advanced/CLI.md' },
          { text: 'Supportanfrage', link: '/de/user/advanced/Support.md' },
          { text: 'Testen', link: '/de/user/advanced/Testing.md' }
        ]
      }
    ]
  },
  {
    text: 'Effekte',
    items: [
      {
        text: 'Allgemeines',
        items: [
          { text: "Effekt-Erstellung", link: '/de/effects/Effects.md' },
          { text: "Entwicklungsframework", link: '/de/effects/Functions.md' },
	  { text: "Benutzeroberfläche", link: '/de/effects/Ui.md' },
          { text: "Unser erster Effekt", link: '/de/effects/OurFirstEffect.md' }
        ]
      },
      {
        text: 'Effekt UI',
        items: [
          { text: "Grafische Benutzeroberfläche", link: '/de/api/Ui.md' }
        ]
      }
    ]
  },
  {
    text: 'Json API',
    link: 'https://api.hyperion-project.org'
  },
  {
    text: "Forum",
    link: 'https://hyperion-project.org'
  },
  {
    text: "Changelogs",
    link:  'changelogs/index.md'
  }
]
