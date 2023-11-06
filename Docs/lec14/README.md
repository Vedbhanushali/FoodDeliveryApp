# Redux

Instead of creating context for large scale application we can create a redux store to maintain our data.
for small application no need of using redux. can use react context instead of it.

## Redux toolkit

standard way to write redux

redux store - single store and we will divide/partition store called slices

can't directly modify the store need to dispatch action which modify the store for example let it be add item to added items in cart this function called by action is called reducer which modifies the slice of store.

selector - to read from slice of store

## installing redux toolkit

```cmd
npm i @reduxjs/toolkit #core library
npm i react-redux # bridge between redux and react
```
