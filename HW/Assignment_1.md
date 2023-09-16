# Assignment 1

## what is Emmet ?  

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code

## Difference between a Library and Framework?

<https://www.microverse.org/blog/javascript-library-vs-javascript-frameworks-the-differences>  

Framework - A JavaScript framework is a set of JavaScript code libraries that provide pre-written code for everyday programming tasks to a web developer. Frameworks have a specific context and aid in creating web applications within that context. They provide you with a great deal of control over your app. They may also point you in the right direction regarding architecture, and the project that follows. The frameworks are made up of numerous libraries that include hooks and callbacks so that you can build on top of them. examples of frameworks : AngularJS, Vue.js, Node.js.  
Library -  A JS library is a piece of reusable code with a single primary use case. A JavaScript library can have multiple functions/objects/methods depending on the language. To have access to that capability, your application will link to a library. JavaScript libraries remove the need to reinvent the wheel for certain bits of code. As a result, development is more efficient and error-free.  
Around 83 JavaScript libraries are accessible, covering machine learning, rapid prototyping, animated 3D graphics, DOM manipulation, and more. example - React, jQuery, D3.js

## What is CDN? Why do we use it?

<https://www.cloudflare.com/learning/cdn/what-is-a-cdn/>

A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos. While a CDN does not host content and can’t replace the need for proper web hosting, it does help cache content at the network edge, which improves website performance. Many websites struggle to have their performance needs met by traditional hosting services, which is why they opt for CDNs.  
By utilizing caching to reduce hosting bandwidth, helping to prevent interruptions in service, and improving security, CDNs are a popular choice to relieve some of the major pain points that come with traditional web hosting.

## Why is React known as React?  

And it’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.

## What is crossorigin in script tag?

example -

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous">
</script>
```

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

Tip: The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).

## What is diference between React and ReactDOM

<https://coursework.vschool.io/react-vs-reactdom/>

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).

React components are such a great way to organize UI that it has now spread to mobile to react is used in web and in mobile. react-dom is used only in web apps.

From the React v0.14 Beta release announcement.

As we look at packages like react-native, react-art, react-canvas, and react-three, it's become clear that the beauty and essence of React has nothing to do with browsers or the DOM.

To make this more clear and to make it easier to build more environments that React can render to, we're splitting the main react package into two: react and react-dom.

Fundamentally, the idea of React has nothing to do with browsers, they just happen to be one of many targets for rendering trees of components into. The ReactDOM package has allowed the developers to remove any non-essential code from the React package and move it into a more appropriate repository.

The react package contains React.createElement, React.createClass and React.Component, React.PropTypes, React.Children, and the other helpers related to elements and component classes. We think of these as the isomorphic or universal helpers that you need to build components.

The react-dom package contains ReactDOM.render, ReactDOM.unmountComponentAtNode, and ReactDOM.findDOMNode, and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString and ReactDOMServer.renderToStaticMarkup.

## What is difference between react.development.js and react.production.js files via CDN?

<https://www.cloudhadoop.com/react-production-development-build>

Development build runs the code as a Development environment and it is very slow. The production environment executes the code and is used by developers and QA people It Development, supports

- Generating Source Maps files for CSS, and helping developers to debug the code about original files
- Hot reloading enables you to reload changes without restarting the server
- Debugger available to debug the code in the browser console
- It creates a single bundle.js file
- Enable React Developer tools
- React DevTools Profiler

Production build is for running the code on client browsers with more performance improvements.

The production environment executes the code and is used by end users or customers

- It has separate bundle files for app and vendor instead of a single bundle file
- Minification and compression of javascript and HTML resources to reduce the size of a file.
- Source Map can be disabled at runtime to reduce the size of the code
- Also, Gzipping code to compress and reduce the size

## What is async and defer?

<https://youtu.be/IrHmpdORLu8>

```html
<script src="">
```

normal script tag when browswer is parsing the html when it encounters script tag it fetches the javascript and executes it till that time html parsing is stop and then resumes

```html
<script async src="">
```

while parsing of HTML asynchronously js will be fetched from server parallely and after it is fetched it HTML parsing will stop and JS will be executed and after it is over HTML parsing will again begin

```html
<script defer scr="">
```

while parsing of HTML asynchronously js will be fetched from server parallely and after HTML parsing is completed then JS will be executed.

### When to use defer and async

asycn does not guarantee order of execution of script but defer does, if there are mutliple scripts which are dependent on each other than should use defer.
another example is when we want to load external scripts google analytic or other which are modular and independent of other scripts then in this case we should use async.  

## References

<https://react.dev/reference/react/createElement>
