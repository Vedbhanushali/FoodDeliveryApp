# Lec 4 Laying Foundation

## pollyfill - Bebble(library)

some older browser does not support latest javascript version ES6 so  
ES6 is converted to another code

## Scripts

we can add commands in script tags which can act as alias

```
scripts:{
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test" : "jest:"
}
```

to run those script in terminal
npx is eqaual to npm run
```
npm run start
```
or 
```
npm start
```

## console logs  

console logs are not directly removed need to install bable plugin transform remove console

```
npm install babel-plugin-transform-remove-console --save-dev
```

this plugin can be configured by two ways CLI and .bablerc file

To use bable we can create a configuration file
bable.rc

configuration is avaliable at https://babeljs.io/docs/babel-plugin-transform-remove-console/

```
{
  "plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]
}
```

## Babel

JSX => uses React.createElement => converted to JS object  => and converted to HTML DOM  
It has html like syntax but it is not hmtl in javascript  
Babel is the javascript compiler for next generation  
It parse the jsx format  