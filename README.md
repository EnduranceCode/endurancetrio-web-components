# EnduranceTrio Race Results

## Introduction

**EnduranceTrio Race Results** is a component to display race results on a website.

## Styling

[Bulma](https://bulma.io/) is the CSS Framework chosen for the styling of **EnduranceTrio Race Results** sample page.

## Development

For the development of **EnduranceTrio Race Results**, [webpack](https://webpack.js.org/) is used and therefore [node](https://nodejs.org/) (and [npm](https://www.npmjs.com/)) must be installed in the development machine.

### npm packages

The main [npm](https://www.npmjs.com/) packages used for the development of **EnduranceTrio Race Results* are listed here.

#### webpack and webpack DevServer

+ [webpack](https://www.npmjs.com/package/webpack);
+ [webpack-cli](https://www.npmjs.com/package/webpack-cli);
+ [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server).

#### webpack HTML plugin

+ [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin).

#### CSS

+ [sass](https://www.npmjs.com/package/sass);
+ [sass-loader](https://www.npmjs.com/package/sass-loader);
+ [css-loader](https://www.npmjs.com/package/css-loader);
+ [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin).

##### Icons and webfonts

+ [@mdi/font v6.5.95](https://www.npmjs.com/package/@mdi/font/v/6.5.95);
+ [mdi-font-build-subset](https://www.npmjs.com/package/mdi-font-build-subset).

#### Code formating and linting

+ [eslint](https://www.npmjs.com/package/eslint);
+ [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier);
+ [prettier](https://www.npmjs.com/package/prettier);
+ [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).

### Webfont custom build

The size optimization of the files with the webfont ([Material Design Icons](https://materialdesignicons.com/)), used by **EnduranceTrio Race Results**, is obtained with the package [mdi-font-build-subset](https://www.npmjs.com/package/mdi-font-build-subset).

The file [subset.json](./src/fonts/subset.json) stored in the folder [src/font](./src/fonts/) must list all the icons used in the code (and also the top 3 that are already listed).

Every time that an icon is added to the file [subset.json](./src/fonts/subset.json), it's necessary to generate the new [Material Design Icons](https://materialdesignicons.com/) webfont files. That can be done with the following commands:

    cp src/fonts/subset.json node_modules/mdi-font-build-subset/
    cd node_modules/mdi-font-build-subset/
    npm install
    npm run build
    cd ../../
    cp node_modules/mdi-font-build-subset/dist/fonts/* src/fonts/

The command `npm install` is only necessary for the first time that the webfont is generated.

The variable `$mdi-icons` in the file [_variables.scss](./src/css/scss/icons/_variables.scss) must also be edited in order to include all the desired icons (the ones already listed on the file [subset.json](./node_modules/mdi-font-build-subset/subset.json)).

### Installation

To start developing **EnduranceTrio Race Results**, clone this repository and install the required [npm](https://www.npmjs.com/) with the following command:

    git clone git@github.com:EnduranceCode/endurancetrio-race-results.git
    cd endurancetrio-race-results
    npm install
