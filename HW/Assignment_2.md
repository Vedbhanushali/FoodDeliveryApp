# Assignment 2

## What is NPM ?

<https://www.w3schools.com/whatis/whatis_npm.asp>  
The World's Largest Software Registry (Library)
npm is the world's largest Software Registry.
The registry contains over 800,000 code packages.
Open-source developers use npm to share software
The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.

All npm packages are defined in files called package.json.

The content of package.json must be written in JSON.

At least two fields must be present in the definition file: name and version.

## What is `Parcel/Webpack`? Why do we need it?

<https://parceljs.org/>  
Parcel is a zero-configuration web application bundler that aims to simplify the development process by eliminating the need for complex build configurations. With Parcel, developers can start building web applications instantly without any explicit configuration files or setup. It provides an intuitive and streamlined workflow, allowing users to focus on writing code rather than spending time on build configurations.

Parcel automatically detects and resolves dependencies, including JavaScript modules, CSS files, images, and more, making it effortless to import and use these assets within web applications. It leverages a parallelized build process and intelligent caching to deliver excellent performance, resulting in faster compilation times. Furthermore, Parcel offers extensibility through its plugin system, enabling developers to enhance its functionality by integrating additional features and optimizations.

In summary, Parcel is a developer-friendly tool that simplifies the process of bundling web applications by providing zero-configuration setup, efficient dependency management, excellent performance, and extensibility through plugins.

## What is `.parcel-cache`

cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## What is `npx` ?

NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

## What is difference between `dependencies` vs `devDependencies`

"dependencies" : Packages required by your application in production. "devDependencies" : Packages that are only needed for local development and testing.

## What is Tree Shaking?

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code/unreachable code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.


## What is Hot Module Replacement?

Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.  
As you save files, Parcel rebuilds what changed and sends an update to any running clients containing the new code. The new code then replaces the old version, and is re-evaluated along with all parents. You can hook into this process using the module.hot API, which can notify your code when a module is about to be disposed, or when a new version comes in. Projects like react-hot-loader can help with this process, and work out of the box with Parcel.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words

- Hot module replacement
- clean console  
- minify the files  
- bundle  
- It was does HMR - Hot module reload using file  watching algorithm  
- Dev and production build  
- Super Fast build algorithm  
- Image optimization  
- Caching while development  
- compatible with older version of browswers  
- HTTPS on dev build  
- port number handling  
- uses consistent hashing algorithm for cacheing  
- it is zero config bundler  
- Tree shaking  - removing un-wanted like if functions are not used in code then they are ignored  

## What is `.gitignore`? What should we add and not add into it?

gitignore file tells Git which files to ignore when committing your project to the GitHub repository

which files to add in gitignore file can be generated from <https://www.toptal.com/developers/gitignore>

## What is package.json file ?

package.json is a metadata file in a Node.js project that describes the project's dependencies, scripts, configuration, and other details.

It typically contains information about the project such as its name, version, author, and license. It also lists the project's dependencies on other Node.js packages, along with their version numbers, so that these dependencies can be automatically installed when the project is set up or updated.

The package.json file is typically located at the root directory of a Node.js project and is automatically generated when you run npm init command to initialize a new project. You can also manually create and modify this file to manage your project's dependencies and configuration.

## What is the difference between `package.json` and `package-lock.json`

<https://www.atatus.com/blog/package-json-vs-package-lock-json>

Package.json is a file that contains all the relevant information about your project, the dependencies it has installed, and so on.
When someone clones your repo and runs npm install the presence of ^ will cause them to get the latest patched version (whether that be a major or minor patch). Codes which are not in consonance with the latest version will break down.

This is when they released package-lock.json. Now, this file will lock npm dependencies the way they were at the time of making the program. So, even if someone clones your repo and installs this package later, he will get hands on the version that the program was scripted in. Basically, it just ignores tilde and carat functions.

## Tilde (~) and carat (^)

Tilde (~) and carat (^), and their difference
Npm version are written in 0.0.0 formats, where first number (from left) stands for major release, second for the minor release and the third for the latest patch release of this particular version.

Patch updates transcend to bug fixes. In package.json this depiction is carried forward by ~. Tilde (~) freezes all the previous major and minor versions. In a way it allows only the latest patched version to be installed when you are installing this particular dependency package.

For example, ~1.2.0 will update the future patch versions when and so they are released. We just need to change the 1.2.0 to 1.2.1, 1.2.2, 1.2.3 etc.

Caret (^) notation is used to update automatically minor updates as well as patch updates. For example, ^1.2.0 will update to 1.3.1 ( if the next minor patch version is released that way) , thus giving us a 1.X.X fix.

## Why should I not modify `package-lock.json`?

It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository.

## What is `node_modules` ? Is it a good idea to push that on git?


node_modules folder is like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when you import them (without a specific path).  
I refer to it as a cache because the node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders) so IT is not good idea to push node modules in server/git repo.  
This is because there's no reason to store copies of all your dependent modules in your own GitHub project. The exact version you were using is known and stored in your package.json or package-lock.json so at any time you or anyone else using your project can download your code and then fetch all the other dependent modules from their original source (including even the exact same versions you were using). So, there isn't any reason to store a separate duplicate copy of all those dependent modules in your own project. That would just be wasteful and would complicate upgrading to a newer version of all those dependent modules.

## What is the `dist` folder?
- The /dist stands for distributable.
- The /dist folder contains the minimized version of the source code.
- The code present in the /dist folder is actually the code which is used on production web applications.
Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
- It is easier to add files to the /dist folder as it is an automatic process. All the files are automatically copied to the dist folder on save.
- The /dist folder also contains all those files which are required to run/build a module for use with other platforms- either directly in the browser, or in an AMD system (eg. require.js).
- Ideally, it is considered a good practice to clean the /dist folder before each build.

## What is `browserlists` ?

Parcel is a module bundler. It can bundle all our code and its dependencies which can then be referenced in our project. When generating the bundle, we can specify the browser version we target. We can do that by specifying our browser list under browserslist property in package.

## dif bundlers: vite, webpack, parcel  

<https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9>

Vite uses the native ES modules featur in the browser to handle imports, while webpack and Parcel use a more traditional approach of bundling all the files together. This allows for faster development builds and hot module replacement with Vite.

## Script tag

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script>
