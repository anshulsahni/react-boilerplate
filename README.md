# React Boilerplate

A quick and comprehensive setup for react applications using redux and redux-saga

### File Structure

The file structure is very simple, starting with **folders in the root

 - **app/**
    This contains items which will be shipped to the client in production such as the build files, index.html file, manifest file,etc.
- **internals/**
    This conatain config related stuff such as webpack config, etc.
- **server/**
    This contains the server which serves the web application to the client and it's helper modules.
- **src/**
    This has all the source code which builds the application. Inside source code directory we have:
     -  **modules/**
          Modules directory contain all the major modules of the code.
          There is a special and reserved module _Pages_ which contain all the different components rendered on different routes.
    -   **utils/**
          Utils folder contain several non react helper functions or module such as request
    -   **api/**
          Api directory contains source code for different modules' api calls
    -   **reducers.js**
          This has root reducer of the whole project all the reducers are combined here.
    -   **sagas.js**
          Just like root reducers this root sagas and all sagas from allover the application are forked here.
    -   **store.js**
          This file here configure the redux store and all the redux middleware.
    -   **App.jsx**
          This contains root route of the application and all first routes are rendered here.
    -   **index.js**
          This is the entry point of source code or app. The app is rendered onto html from this file only.

Here are the **configuration** files used by different _node modules_ in the root of the react app.

  - **.babelrc**: for babel
  - **.editorconfig**: for different editors
  - **.elsintrc.json**: for eslint.
  - **.lintstagedrc**: for lintstagedrc node module
  - **.cricleci/config.yml**: for circle CI.


### Webpack Configuration


### Creating Sagas, reducers, actions etc


### Creating Routes


### Writing Tests


### Writing api calls
