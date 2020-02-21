# Answers

1. What is React JS and what problems does it try and solve? Support your answer
   with concepts introduced in class and from your personal research on the web.

   - ReactJS is a framework for manipulating the DOM, and it tries to solve the
     problems of reusing code (keeping things DRY) and keeping code contained.
     It also makes manipulating the DOM very easy by allowing you to specify
     what the HTML should look like, and letting it handle updating the DOM to
     match.

1. What does it mean to think in react?

- Thinking in react means thinking of the UI as a hierarchy of components with
  state and properties. It means thinking of the UI as how you want it to look,
  rather than the transformations you have to do to make it look that way.

1. Describe state.

   - `state` is (generally) internal to a component, and is used to make
     components interactive. If you have a button that increases a number, that
     number is the "state". If you have a list of todo items that can have items
     added or removed, then that list is the "state".

1. Describe props.

   - `props` are "Properties" of a component. They are something that a parent
     component passes to a child component. They define the "API" of a
     component; a component can accept properties that set colors, text, or even
     functions to be run for certain events. They are key for making reusable
     components.

1. What are side effects, and how do you sync effects in a React component to
   state or prop changes?

   - Side effects are routines that require accessing external resources that
     may fail. Fetching data across the network is an example of a side effect.

   - In react, we can sync effects with component state by passing in
     dependencies as the second variable to the `useEffect` hook.
