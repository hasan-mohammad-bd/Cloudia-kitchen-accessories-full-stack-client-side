import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
        <h2 className="text-center py-5">Question and Answer</h2>
      <h1> How will you improve the performance of a React Application?</h1>
      
      <p>
        <span className="text-orange-400">Answer: </span>
        <br />
        I am pointing out some useful ideas.
        <br />
        <br />
        1. Where it not necessary, dont keep the the component state.
        <br />
        2. Use lazy loading in react to load the image when it is necessary.
        <br />
        3. it is necessary list virtualization or windowing in react.
        <br />
        4. Delete unnecessary file .
        <br />
        5. To prevent unnecessary re-renders memorizing react components.
        <br />
        6. use dynamic import() for code-spitting.
      </p>
      <br />
      <br />
      <h1> What are the different ways to manage a state in a React application?</h1>
      <p>
        <span className="text-orange-400">Answer: </span>
        <br />
        with the help of redax, the problem can be solve easily:
        <br />
        Redux was created to resolve this particular issue. it provides a central store that holds all countries of your operation. Each element can pierce the stored state without transferring it from one element to another. Then's a simple view of how Redux works.
        <br />
        Actions are loads of information that shoot data from your operation to your store. Conduct are transferred usingstore.dispatch(). Actions are created via an action creator. Then's an illustration action that represents adding a new todo item
        <br />
        Reducers specify how the operation's state changes in response to conduct transferred to the store. An illustration of how Reducer works in Redux is as follows
        <br />

        The store holds the application state. You can pierce stored state, modernize the state, and register or unregister listeners via coadjutor styles.
      </p>
      <br />
      <br />
      <h1> How does prototypical inheritance work?</h1>
      <p>
        <span className="text-orange-400">Answer: </span>
        <br />
        javaScript prototype is used to add new methods and properties in a
        existing abject cconstructoe. Then the js is inherit properties from a
        prototype. it allows to resue the method or properties from one js
        object to another through a reference pointer function. All js object
        inherit props and methods from a prototype ::
        <br />
        Player inherit from player.prototype.
        <br />
        Array inherit from Array.prototype.
        <br />
        Date inherit from Data.prototype.
      </p>
      <br />
      <br />
      <h1> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
      <p>
        <span className="text-orange-400">Answer: </span>
        <br />
        However, calling the setState() subsequently may just replace the update.
        you made, If you modernize it directly. When you directly modernize the
        state, it doesn't change this state incontinently. Rather, it creates a
        pending state transition, and entering it after calling this system will
        only return the present value. You'll lose control of the state across
        all components.
      </p>
      <br />
      <br />
      <h1>What is a unit test? Why should write unit tests?</h1>
      <p>
        <span className="text-orange-400">Answer: </span>
        <br />
        Uniting Testing: it a software testing tool where individual units of a software are tested very carefully.
        <br />
        The reason of unite testing is to validate that each 
        components of the application code perform perfectly.
        it is done during the development of an software by the developers. unit test identify a section of code and verify its correctness. A unit can be individual function , procedure, module, method, or object. it is the first testing before integration testing.
        <br />
        Unit testig is done because application devloper sometimes try saving time during unite testing . if proper unit testing is done earlier, it saves and money in the end.
      </p>
    </div>
  );
};

export default Blogs;
