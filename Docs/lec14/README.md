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

## steps

1. Create Store

    - configurestore() - RTK

2. Provide  store to app

    - <Provider store = {store}> import from react-redux

3. create Slice

    - RTK - createSIice({
            name:
            initialState :
            reducers: {
                addItem: (state,action) => {}
            }
        })
        export const {addItem,..} = cartSlice.actions; // all actions
        export default cartSLice.reducer;

4. put that slice into store
    - {
        reducer: { // add all reducers here default export of slice
            cart: cartSlice,
            user: userSlice
        }
    }
