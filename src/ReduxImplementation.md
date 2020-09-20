Redux store implementation steps and tips: 

Step 1: Install Redux using npm install redux react-redux
Step 2: Create store.js
Step 3: Wrap root component in Provider from react-redux in index.js
Step 4: Create actions.js
Step 5: Create reducers.js
Step 6: Wrap a component in Redux connect with mapStateToProps and mapDispatchToProps
Step 7: Trigger Redux actions using onCreatePressed such as in newTodoList.
Step 8: If a component needs only one of the mapStateToProps and mapDispatchToProps, we can pass just that with other value being null.
Step 9: With this implemenation, state will be lost on browser refresh. To make state persistent, we will be using redux-pesist. Install is using npm install redux-persist
Step 10: After install redux-persist , we will need to update store.js and index.js
Step 11: In store.js, we need to create persistedReducer using apersistConfig and rootReducer.
Step 12: In index.js, wrap app component in PersistGate. 
Step 13: If app is crashing due to state issue for which reason isn't obvious, try clearing local storage of browser using from inspect element -> Applications -> local storage

Debugging 
- Redux chrome extension 
- For this to work add window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() in createStore of store.js 

Best Practices 
- Export both connected and un-connected version of a component. Connected version of component is what rest of the app will use and Un-connected version will be very useful for testing without setting up a mock store.
- Never trigger redux actons from reducers
- Don't write async operations in reducers.
- Connecting a component reduces its re-usability as data is linked to it. Such cases can be handeled by connecting Container components only.


Reference-  
https://www.linkedin.com/learning/building-modern-projects-with-react
