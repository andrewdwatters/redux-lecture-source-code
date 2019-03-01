# Redux-Lecture-Code-Along

### Redux Counter Vanilla Example

This example does not require a build system or a view framework, and exists to show the raw Redux API used with ES5.

  > The new Counter Vanilla example is aimed to dispel the myth that Redux requires Webpack, React, hot reloading, sagas, action creators, constants, Babel, npm, CSS modules, decorators, fluent Latin, an Egghead subscription, a PhD, or an Exceeds Expectations O.W.L. level. It's just HTML, some artisanal `<script>` tags, and plain old DOM manipulation. Enjoy!
  >

* [Dan Abramov](https://github.com/gaearon)

____
### Redux Counter Example


This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant [React Redux](https://github.com/reduxjs/react-redux) bindings instead.


### Redux Todos with Undo Example

This example provides a deeper understanding of how state updates work together with Components in Redux.  It shows how reducers can delegate handling actions to other reducers, and how [React Redux](https://github.com/reduxjs/react-redux) can be used to generate container Components from presentational Components. This example also shows how wrapping a reducer with [Redux Undo](https://github.com/omnidan/redux-undo) can allow for undo/redu functionality with only a few lines of code.


### Redux Shopping Cart Example

This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with [Redux Logger](https://github.com/LogRocket/redux-logger) and conditional dispatching of actions with [Redux Thunk](https://github.com/reduxjs/redux-thunk) middleware.



____
The Counter, Todos with Undo, and Shopping Cart examples were built with [Create React App](https://github.com/facebookincubator/create-react-app)

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX. See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.
