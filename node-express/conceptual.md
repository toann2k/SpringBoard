### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

One way we can manage asynchronous code is through promises. In this way we can avoid many nested callbacks. When an asynchronous function returns a promise then we can use a .then and .catch to state what should happen after the promise is resolved or rejected. If there are multiple async functions that need to run after each other then .then can be chained to avoid nested callbacks. Another possibility is using async await with try catch. If a function is declared as async and there are async functions within that function then we can await the response from the inner function. The await will extract the value form the resolved promise. The reason we use catch is that if the promise is rejected then it can be caught.

- What is a Promise?

A promise is a one time guarantee of future value. This means that a promise will either be rejected 
or resolved with a value and that is guaranteed to happen in the future at some point.

- What are the differences between an async function and a regular function?

An async function will always return a promise whereas a regular function will not. An async function 
supports the use of await and a regular function does not. An async function will run asynchronously whereas a regular function will run synchronously.


- What is the difference between Node.js and Express.js?

Node.js is a technology that allows for JS to be run in a server-side environment. Express.js is a framework for building web applications using Node.js

- What is the error-first callback pattern?

A pattern where Node callbacks will have the error as the first parameter. This is common with older modules that do not support promises or async/await

- What is middleware?

Middleware are functions that run in the middle of a request response cycle. We can use middleware to intercept the request in order to modify it so that routes can use the updated response and take advantage 
of it.

- What does the `next` function do?

The next function will allow the next piece of middleware in succession to run.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}

It is getting user info and not necessaryly users themselves so potentially being more descritive in the function name would help. The variables could also be renamed for that as well such as elieInfo. Performance wise each async request does not depend on each other so there is no need to await the first before starting the second and wait the second before starting the third. 

