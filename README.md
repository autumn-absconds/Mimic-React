# Mimic-React
To understand how the react works on base level.


The reactElement object in React can represent either a DOM element or a functional component. Here are the possible variations:

DOM Elements: These are standard HTML tags like div, span, a, etc. They are represented as strings in the type field of a React element.
Example:
{
    type: 'div',
    props: {
        className: 'my-class',
        children: 'Hello, world!'
    }
}

In this case, type is a string representing a HTML tag, props is an object containing properties that should be added to the HTML element, and children is the content inside the HTML element.

Functional Components: These are user-defined components that are functions. They accept props as an argument and return a React element.
Example:

function MyComponent(props) {
    return {
        type: 'div',
        props: {
            children: props.text
        }
    };
}

{
    type: MyComponent,
    props: {
        text: 'Hello, world!'
    }
}


In this case, type is a function representing a React component, and props is an object containing properties that should be passed to the component.

Children: The children prop can be a string, a number, a React element, or an array of any of these.
Examples:

String or number:
{
    type: 'div',
    props: {
        children: 'Hello, world!'
    }
}

React element:
{
    type: 'div',
    props: {
        children: {
            type: 'span',
            props: {
                children: 'Hello, world!'
            }
        }
    }
}

Array of React elements:
{
    type: 'div',
    props: {
        children: [
            {
                type: 'h1',
                props: {
                    children: 'Hello, world!'
                }
            },
            {
                type: 'p',
                props: {
                    children: 'This is a paragraph.'
                }
            }
        ]
    }
}


----------function one ----------1 one is don eleements which is pretty normal , explain me second one and how tackel that one (functional one)----
The second type of reactElement is a Functional Component. In React, a functional component is a JavaScript function that returns a React element. It accepts an input (called "props") and returns what you want to render.

Here's an example of a functional component:
function MyComponent(props) {
    return {
        type: 'div',
        props: {
            children: props.text
        }
    };
}

In this case, MyComponent is a function that accepts props as an argument and returns a React element. The returned element is a div that contains the text passed in through props.text.

When you have a reactElement that represents a functional component, the type field of the reactElement will be the function itself. Here's an example:
{
    type: MyComponent,
    props: {
        text: 'Hello, world!'
    }
}

In this case, type is MyComponent, which is a function. To render this reactElement, you would call the function with the props as an argument, and then render the returned React element.

Here's how you might handle this in your customRender function:
function customRender(reactElement, container) {
    // If the type is a string, it's a DOM element
    if (typeof reactElement.type === 'string') {
        // ...create and append the DOM element as before...
    }
    // If the type is a function, it's a functional component
    else if (typeof reactElement.type === 'function') {
        const componentFunction = reactElement.type;
        const returnedElement = componentFunction(reactElement.props);
        customRender(returnedElement, container);
    }
}
In this code, if reactElement.type is a function, it calls that function with reactElement.props as an argument to get the returned React element. Then it calls customRender recursively with the returned element and the same container. This allows it to handle functional components.


---------when will condition like that occour ? , like type:My Componenet ? , is this just like in real React js which has props which sends data to other componants ?-------------------------------------

Yes, exactly. The type: MyComponent scenario occurs when you're using a custom functional component in your React code.

In real-world React, you often break down your application into smaller, reusable pieces called components. These components can be either functional or class-based, but as per your request, we're focusing on functional components.

A functional component in React is just a JavaScript function that returns JSX. It can receive data from its parent component through props. Here's an example:
function MyComponent(props) {
    return <div>{props.text}</div>;
}

You can use this component in another component like this:

function App() {
    return <MyComponent text="Hello, world!" />;
}

In this case, MyComponent is a functional component that receives props and uses the text prop in its returned JSX.

When React sees <MyComponent text="Hello, world!" />, it translates it into a reactElement object that looks like this:
{
    type: MyComponent,
    props: {
        text: 'Hello, world!'
    }
}

Here, type is the function MyComponent, and props is an object with a text property. This is the same structure we've been discussing.

So, when you see type: MyComponent in a reactElement, it means that the reactElement represents an instance of the MyComponent functional component.