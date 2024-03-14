# EnduranceTrio Web Components

**Set of *Web Components*, built with *LitElement*, aimed for the EnduranceTrio applications system.**

## Table Of Contents

1. [Introduction](#introduction)
2. [Development](#development)
    1. [Technologies](#technologies)
    2. [Installation](#installation)
3. [License](#license)

## Introduction

**EnduranceTrio  Web Components** is a set of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), built with [LitElement](https://lit.dev/), aimed for the EnduranceTrio applications system.

## Development

For the development of **EnduranceTrio Web Components**, [Webpack](https://webpack.js.org/) is used and therefore [node](https://nodejs.org/) (and [npm](https://www.npmjs.com/)) must be installed in the development machine.

### Technologies

#### Tools

**EnduranceTrio Web Components** uses the following [npm](https://www.npmjs.com/) packages for its development:

+ [css-loader](https://www.npmjs.com/package/css-loader);
+ [dotenv](https://www.npmjs.com/package/dotenv);
+ [eslint](https://www.npmjs.com/package/eslint);
+ [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier);
+ [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier);
+ [eslint-plugin-wc](https://www.npmjs.com/package/eslint-plugin-wc);
+ [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin);
+ [prettier](https://www.npmjs.com/package/prettier);
+ [sass](https://www.npmjs.com/package/sass);
+ [sass-loader](https://www.npmjs.com/package/sass-loader);
+ [webpack](https://www.npmjs.com/package/webpack);
+ [webpack-cli](https://www.npmjs.com/package/webpack-cli);
+ [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server).

#### Build

**EnduranceTrio Web Components** is built with [LitElement](https://lit.dev/). The styling of the its components is based on [Bulma](https://bulma.io/) and the used icon library is [Material Design Icons](https://pictogrammers.com/library/mdi/). [Bulma](https://bulma.io/) is also used for the styling of **EnduranceTrio Web Components** sample page. Therefore, the following [npm](https://www.npmjs.com/) packages are used to build **EnduranceTrio Web Components**:

+ [lit](https://www.npmjs.com/package/lit);
+ [bulma](https://www.npmjs.com/package/bulma);
+ [@mdi/js](https://www.npmjs.com/package/@mdi/js).

### Installation

To start developing **EnduranceTrio  Web Components**, clone this repository and install the required [npm](https://www.npmjs.com/) packages with the following command:

    git clone git@github.com:EnduranceCode/endurancetrio-web-components.git
    cd endurancetrio-web-components
    npm install

To setup the environment variables file, copy the file [`.env.template`](.env.template) as `.env.development`and then define the variables values for the ***development*** environment. Repeat the process for the ***production*** environment, naming the correspondent environmnet variables file as `.env.production`.

## License

**EnduranceTrio Web Components** is licensed under the terms of [MIT License](./LICENSE).
