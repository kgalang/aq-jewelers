
# AQ Jewelers Site:

The public facing website for AQ Jewelers. Gatsby site built with with React and Styled Components.

Extended from Gatsby Universal Starter

## Recommended Environment

1. VSCode
2. Install [VSCode Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
3. [ZSH](https://ohmyz.sh/)
4. Install [NVM](https://github.com/nvm-sh/nvm)
5. Make sure to install and run the correct version of node when developing on this project

```sh
nvm install lts/dubnium
nvm alias default lts/dubnium

## If you need to switch back to it
nvm use
```

5. Use [HomeBrew](https://brew.sh/)
6. Use [yarn](https://yarnpkg.com/en/)

```sh
brew install yarn
```

Feel free to use any terminal. However, if pair programming with LiveShare you will need to use the integrated VSCode terminals.

## Development Process

We are using [Netlify](https://www.netlify.com/) for CI so the process is a little different. First, always code on a branch and put in a PR against `develop`. **NEVER PR AGAINST MASTER OR COMMIT TO MASTER**

We have two environments:

`develop`: Where the latest code lives and what all PRs should be created against
`master`: This serves as production and only tested code from `develop` goes into here

The reason is because each branch pushed to the upstream will be built and deployed by Netlify, including features branches! This is great for reviewing PRs and enabling you to test branches in a production environment.

## Coding Standards with VSCode

You do not have to use VSCode in order to develop on this project, but it is highly recommended. Before we begin, please install the following plugins:

1. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

There are workspace settings for this repo located in [`.vscode/settings.json`](./.vscode/settings.json) that will format all files you create or edit on save according to the rules defined in `.prettierrc`, `.editorconfig`, and `.eslintrc` files. There is also a running list of spell check exceptions. You can override these settings with your user settings if needed.

If you need to add a global variable, insert it into the `.eslintrc` file. Sometimes you need to break the rules for some of the lines of code. If you need to do that you can right click on the broken rules in the code and disable that rule for that line. It's helpful to disable the rule for the line of code so others can see why it's needed.


## Configuration

Find the site-wide configuration in `site-config.js`.

```js
module.exports = {
  siteTitle: `Gatsby Universal`,
  siteTitleShort: `GatsbyU`,
  siteDescription: `An opinionated starter for Gatsby.`,
  siteUrl: `https://gu.fabianschultz.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
```

> Don't forget to update your `robots.txt` inside `static/`!

## Folder structure
```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   └── styles # global styles, themes, breakpoints, and custom media queries
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```
