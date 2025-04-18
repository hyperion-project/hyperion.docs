## Documentation
This repository contains the [Hyperion](https://github.com/hyperion-project/hyperion.ng) documentation build files. It's written in Markdown with [VitePress](https://vitepress.dev) as static site generator.

### Development
To edit or translate the documentation, it's not necessarily required to follow these steps (As we use Markdown). But if you want to check the results, please do so.
 - Install latest [Node.js LTS](https://nodejs.org/en)
 - Open console, clone this repository and navigate into it
 - Do `npm install`
 - Now you can start dev server with `npm run docs:dev`
 - Open Browser and go to address `localhost:5173`
 
#### Notes
 - Do not rename files and folders while translating
 - To modify the sidebar/navbar checkout the folder `docs/.vitepress/configs`

### Production
To get a deployable version run
 - `npm run docs:build` (while inside this folder)
 - Files will be in `docs/dist` folder
