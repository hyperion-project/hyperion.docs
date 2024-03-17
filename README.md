## Documentation
This repository contains the [Hyperion](https://github.com/hyperion-project/hyperion.ng) documentation build files. It's written in Markdown with [VuePress 2](https://v2.vuepress.vuejs.org/) as static site generator.

### Development
To edit or translate the documentation, it's not necessarily required to follow these steps (As we use Markdown). But if you want to check the results, please do so.
 - Install latest [Node.js LTS](https://nodejs.org/en/)
 - Open console
 - Install Yarn `npm install --global yarn` (If this does not work - logout/login)
 - Clone this repository and navigate into it
 - Do `yarn install`
 - Now you can start dev server with `yarn docs:clean-dev`
 - Open Browser and go to address `localhost:8080`
 
#### Notes
 - Do not rename files and folders while translating
 - Copy/paste and translate also `.vuepress/config.js` at `hyperionTheme.locales`
 - Changes in `.vuepress/config.js` may lead to a bugged dev server. Restart.
 - To modify the sidebar pages checkout the `.vuepress/config` folder

### Production
To get a deployable version run
 - `yarn docs:build` (while inside this folder)
 - Files will be in `dist` folder
