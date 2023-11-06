# Assignment 9

## Q. When and why do we need `lazy()`?

<https://www.copycat.dev/blog/react-lazy/#:~:text=%60React%20lazy()%60%20makes%20it,when%20the%20component%20is%20rendered>.

Lazy loading in React is an optimization technique for websites or web applications. It is also known as on-demand loading because it only loads content visible on users’ screens. let’s take a look at a simple analogy.

So when a user visits a web page, instead of loading the entire page, only a portion of it renders. Then, react lazy loading delays the remaining webpage until the user scrolls to that portion of the web page.

The major benefit of lazy loading in React is performance. Loading less JavaScript code to the browser will reduce DOM load time and boost the performance of our application. Users are able to access a web page even if everything has not been loaded. Let’s take a look at some other benefits of lazy loading a React component:

- Faster initial loading: React lazy loading helps reduce the page weight, allowing for a faster initial page load time.
- Better User Experience: React lazy loading improves a user’s experience on an application. Good UX helps increase sales in business and also retain customers.
- Less bandwidth consumption: React lazy loading images help save data and bandwidth. This is particularly useful for users who do not have fast internet or large data plans.
- Preserving system resources: Lazy loading React components helps conserve server and client resources by requesting just a fraction of components.
- Reduced work for the browser: When React lazy loads images, browsers do not need to process images until they are requested when users scroll to that part of the page.

## Q. What is `suspense`?

<https://blog.bitsrc.io/4-best-ways-to-use-reacts-suspense-component-17b7e7788908#:~:text=Suspense%20is%20a%20new%20feature,other%20asynchronous%20work%20to%20load>.

Suspense is a new feature that lets your component “wait” for something before it can render. Some of the use cases where it is used are data fetching and waiting for images, scripts, and other asynchronous work to load. Props for Suspense Component
children: They are the actual UI you intend to render. The Suspense boundary will switch to render fallback when the children takes too long to render.
fallback: It is a lightweight placeholder view such as a loading spinner, An alternate UI to render in the place of the actual UI if it has not finished loading.
Suspense will automatically switch to fallback when children suspends, and back to children the data is ready. If fallback suspends while rendering, it will activate the closest parent Suspense boundary.

React will display your loading fallback until all the code and data needed by the children has been loaded.

You can wrap any part of the application within the Suspense boundary:

```jsx
<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
```

In the example above, the Albums component suspends while fetching the list of albums. Until it's ready to render, React switches the closest Suspense boundary above to show the fallback(Loading component). Then when the data loads, React hides the Loading fallback and renders the Albums component with data.

## Q. Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?

- Synchronous Input and Suspense: In React, components are typically expected to respond to user interactions and updates synchronously. However, there are cases where a component may need to perform asynchronous operations, such as fetching data from an API. When a component initiates an asynchronous operation and suspends (i.e., it hasn't yet received the required data), React doesn't know how to handle the subsequent updates, and it may temporarily show a loading indicator or placeholder UI.

- startTransition Function: The startTransition function is a part of React's concurrent mode and Suspense API. It's used to indicate to React that a specific section of your code is initiating an asynchronous transition, and React should treat updates within that section as lower priority. This helps prevent unnecessary rendering of intermediate UI states and provides a smoother user experience.

- How Suspense Helps: When you wrap updates that might suspend in a startTransition function, React understands that these updates are asynchronous and should not block the main rendering thread. Instead, it allows other UI updates to be processed first. When the suspended update completes (e.g., data fetching is done), React can then update the UI accordingly. This helps avoid situations where synchronous input causes temporary loading indicators.

## Q. `Advantages and Disadvantages` of using this `code splitting pattern`?

Advantages:

- Faster Initial Page Load: By splitting your code into smaller bundles, you reduce the amount of JavaScript that needs to be downloaded and executed when a user first visits your website. This results in faster initial page load times, improving the overall user experience.

- Improved Performance: Smaller bundles can lead to faster parsing and execution times, which can result in improved runtime performance for your web application. This is particularly beneficial for mobile users and those with slower internet connections.

- Efficient Resource Usage: Code splitting allows you to load only the code that is needed for the current page or user interaction. This efficient resource usage reduces unnecessary data transfer and memory consumption, contributing to a more lightweight application.

- Better Caching: Smaller bundles are more cache-friendly. Browsers can cache individual chunks, and when a user navigates to another page or revisits your site, they can often load previously cached chunks, further speeding up page loads.

- Easier Maintenance: Code splitting encourages a modular and organized codebase, making it easier to maintain and update your application. Each bundle can represent a specific feature or page, making it clear where changes need to be made.

- Dynamic Loading: Code splitting allows you to dynamically load components or features when they are needed. This is especially useful for applications with complex routing or when certain parts of the app are only relevant to specific users or scenarios.

Disadvantages:

- Complexity: Implementing code splitting can add complexity to your build process and development workflow. You need to configure tools and scripts to properly split and load code.

- Configuration Overhead: Setting up code splitting, especially in larger applications, can require careful configuration to ensure that dependencies are properly managed and that code splitting boundaries make sense.

- Potential for Overhead: In some cases, the overhead of loading additional chunks (e.g., HTTP requests) can offset the benefits of code splitting, particularly for small applications or when the split points are not well-defined.

- Debugging Challenges: Debugging can become more challenging when code is split into multiple chunks, as you may need to deal with source maps and ensure that you can easily inspect and debug code that's loaded on-demand.

- Compatibility: While modern browsers and tools support code splitting, older browsers may not handle it gracefully. You may need to implement additional strategies for older browser support, such as polyfills or alternative bundling approaches.

- Initial Complexity: Code splitting might not be necessary for all projects, especially small or simple applications. Implementing code splitting when it's not needed can add unnecessary complexity to your project.

## Q. When `do we and why do we need suspense`?

React Suspense is a feature introduced in React to help manage asynchronous operations, code splitting, and data fetching in a more straightforward and declarative way. You might need to use Suspense in your React application in various situations, depending on the specific requirements and use cases of your project. Here are some common scenarios where you might need and want to use React Suspense:

- Data Fetching: When your application needs to fetch data from an API, database, or any asynchronous source, Suspense can simplify the management of loading states and error handling. By using Suspense with React.lazy and the ErrorBoundary component, you can create a cleaner and more structured way to handle data loading and errors.

- Code Splitting: As your application grows, it can become large and take longer to load initially. Code splitting with Suspense allows you to split your application into smaller chunks, loading only what's necessary for the current route or view. This improves the initial load time and reduces the bundle size.

- Loading Indicators: Suspense can help you create loading indicators or placeholders for components that are waiting for data to be fetched. This provides a better user experience by showing feedback to the user while asynchronous operations are in progress.

- Optimistic Updates: When you need to perform updates that are optimistic (assuming success but may fail), Suspense can be used to handle the waiting period for confirmation. You can show a loading state until the update is confirmed, and if an error occurs, you can gracefully handle it.

- Synchronous-Looking Asynchronous Operations: Sometimes, asynchronous operations can appear synchronous in your code (e.g., a function that fetches data and returns it). Suspense allows you to write code that looks synchronous but handles the asynchronous aspect under the hood.

- Server-Side Rendering (SSR) and Data Preloading: In server-side rendering scenarios, you can use Suspense to preload data required for rendering a component before sending the initial HTML to the client. This ensures that the initial render on the client side is as fast as possible.

- Nested Components with Different Loading Times: When you have nested components that load at different times, Suspense helps coordinate the loading states of these components, preventing issues like "waterfall loading" where one component's loading blocks others.

- Error Boundaries: Suspense allows you to define error boundaries that capture and handle errors at the component level. This makes it easier to implement graceful error handling in your application.

- Resource Management: Suspense can also be used for resource management, such as preloading images or other assets, ensuring that they are available when needed.

In summary, React Suspense is a powerful tool for managing asynchronous operations and improving the user experience in React applications. You should consider using it when your application involves data fetching, code splitting, and scenarios where you need to handle loading states and errors. It provides a more declarative and organized approach to handling asynchronous behavior, making your code more maintainable and user-friendly.

## Coding Assignment

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)  
- [React lazy](https://beta.reactjs.org/reference/react/lazy)
