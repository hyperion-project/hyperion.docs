## Documentation
This repository contains the [Hyperion](https://github.com/hyperion-project/hyperion.ng) documentation build files. It's written in Markdown with [VuePress](https://vuepress.vuejs.org/) as static site generator.

### Development
To edit or translate the documentation, it's not necessarily required to follow these steps (As we use Markdown). But if you want to check the results, please do so.
 - Install latest [Node.js LTS](https://nodejs.org/en/)
 - Open console
 - Install Yarn `npm install -g yarn` (If this does not work - logout/login)
 - Clone this repository and navigate into it
 - Do `yarn install`
 - Now you can start dev server with `yarn docs:dev`
 - Open Browser and go to address `localhost:8080`
 
#### Notes
 - If you want to view the deployable site locally run `yarn docs:serve`
 - Do not rename files and folders while translating
 - Copy/paste and translate also `.vuepress/config.js` at `themeConfig.locales`
 - Changes in `.vuepress/config.js` may lead to a bugged dev server. Restart.
 - To modify the sidebar pages checkout `.vuepress/config.js` at `themeConfig.sidebar`
 
 - In case the yarn commands fail with an `error:03000086:digital envelope routines::initialization error`, set openssl-legacy mode and run the command again: \
   **Linux** `export NODE_OPTIONS=--openssl-legacy-provider` \
   **Windows** `SET NODE_OPTIONS=--openssl-legacy-provider`

### Production
To get a deployable version run
 - `yarn docs:build` (while inside this folder)
 - Files will be in `dist` folder
