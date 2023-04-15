## Our Application is powered by many packages which is handled by NPM package manager

```
nmp init -y
```

## we will be installing parcel from npm

```
npm install -D parcel
```

-D for Development environments

## package.json

package.json will be used for configuration for developing environment
parcel version with ^ mean we can upgrade  
parcel version with ~ mean stay with current version

## package-lock.json  

this file is used on production server
it holds the locked version of project dependencies  

## Node modules  

it is contains collection of packages which is downloaded by parcel  
It is very big file  
There is no need to push node modules on git
our configuration files package.json and package-lock.json contains sufficient information
from which node modules can be downloaded
so when configuration file is pushed on server
server can download/generate those node module files there.

## inject react cdn in script tag

It is not good way better way is to import react package
in node modules  
It is not good way because what is cdn link goes down

so to install react in our node modules

```
npm install react
```

here we are not using -D because we want react in our production as well as development environment so it will be installed globally

also installing npm react dom
```
npm -i react-dom
```  

-i is for install

## Ingite our App

to ignite our app we use command npx parcel and entry point of our app.  
npx - npm execute  
```
npx parcel index.html
```
## Importing react

after installtion of react need to import it from node modules which we downloaded using parcel in script js file

```
import React from "react";
import ReactDOM from "react-dom/client";
```