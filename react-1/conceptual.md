### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?  

React is a front end framework that allows us to build front end applications. React has reusable components that know how to render themselves and can be reused. This can make it easy to build applications that take advantage of this. React also has re-rendering when state changes which can make it easy to make single page applications.

- What is Babel?  

It is a a transpiler that can covert JSX which cannot be read by the browser into JS which can. 

- What is JSX?  

It is very much like writing HTML in JS although it isn't valid HTML or JS. It allows us to write React components very easily and then it is converted with Babel for the browser. 

- How is a Component created in React?

A component is created by writing a function that returns some JSX. The function is called whenever you write that component inside of JSX tags.

- What are some difference between state and props?  

State is mutable whereas props are not. When state is changed a component is re-rendered. Another difference is that state is not passed down to child components. The only way to pass information down to children is through props. 

- What does "downward data flow" refer to in React?

Downward data flow is the idea that parent components pass data down to their
children via props. In order to make data go the other way, we have to pass a
function down from the parent that the child can then call with some
information.

- What is a controlled component?  

A controlled component is one that is controlled by react and that state is always controlled by react. For example, in an input field in a form when the input is text react should control the state of the input so that it can use it. There could be issues if react is not aware of the changes being made in the DOM when compared to it's virtual DOM.

- What is an uncontrolled component?

An uncontrolled component is one where react it not aware of the state change. It is very uncommon to need to use an uncontrolled component, but it can happen in the event of 3rd party libraries and inputs for uploading files.

- What is the purpose of the `key` prop when rendering a list of components?

It allows react to very quickly identify which components are changed so that it knows which ones to re-render very quickly. Without this performance could take a hit since react would not be able to identify quickly which component is changed. 

- Why is using an array index a poor choice for a `key` prop when rendering a 
list of components?  
The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe `useEffect`.  What use cases is it used for in React components?

`useEffect` is used to run code after a rendering happens. Most commonly this is
used to do something after a render, or after the initial render. Examples could
include communicating with an API, syncing information to local storage, or
working with timers.

- What does `useRef` do?  Does a change to a ref value cause a rerender of a component?

`useRef` gives us an object with a key of `current` that can hold any value we
want. The ref persists across rerenders, and is independent of the component's
rendering process. Mutating a ref does not trigger a rerender.

- When would you use a ref? When wouldn't you use one?

Two common use cases for refs are: (1) accessing an underlying DOM element, and
(2) working with timers. You wouldn't want to use a ref to manipulate the DOM if
you could achieve the same result by simply using state. Refs are an escape
hatch that allow you to access the DOM when you're trying to do something that
you can't do with props / state.

- What is a custom hook in React? When would you want to write one?

A custom hook is a function starting with `use` that can help you refactor
duplicate code across several components, or move business logic out of a
component. They often involve built-in hooks coming from React (such as
setState). The most common example of a custom hook is one that will toggle a
boolean in state, something like: