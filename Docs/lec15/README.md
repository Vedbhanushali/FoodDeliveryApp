# React testing

## different type of testing

- Manual testing (job of tester)
- Automation testing (job of QA)
  - selenium tool
- End to End testing (convers entire user journey)
  - cypress (complete user steps simulation / flow)
  - tested in headless browser (kind of actual browser without UI)
- Unit testing (job of developer) testing of small features of application
- Integration testing (job of developer) - testing of integration of several components
- Regression testing / smoke testing

## react testing library part of Testing library

<https://testing-library.com/docs/>

[for react testing](https://testing-library.com/docs/react-testing-library/intro)  

used jest (**a delightful javascript testing framework.**)behind the scene
older projects use Enzyme for testing project

### Installation react testing library

```cmd
npm install --save-dev @testing-library/react
```

### Install jest as testing library is dependent upon it

```cmd
npm i -D jest
```

### configure jest

```cmd
npx jest --init
```

configuring jest will create - jest.config.js

- typescript = no
- environment = jsdom (browser-like) #frontend
- coverage report = yes
- provider to instrument code coverage = babel
- automatically clear mock calls (garbage collection) = true

### installed jest-environment-jsdom required package for jest version above 28

```cmd
npm i -D jest-environment-jsdom
```

## Create a new test

- create a new folder ```__tests__``` this is to indetified tests of application
- for creating a unit test create a file of extension ```name.test.js```
- configure babel for jest

## configure babel to compile jest files

  ```cmd
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```

- config babel config file

  ```json
  module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
  ```

- git ingnore coverage repo not required in production server

Create a new unit test

- jest does not understand jsx so need to configure babel for compyling jsx

  ```cmd
  npm i -D @babel/preset-react
  ```

  ```json
  [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
  ]
  ```

## Execute test scritps

```
npm run test
```
