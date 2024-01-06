exports.createElement = (type, props, ...children) => {
    return { type, props, children };
};



//ok so in the first run in the transpiling procss , the createElement function is actually not called ?? the transpiler just replaces the values of jsx into the MyReact.createElement function so that the function is ready to be run when out.js file is executed ??

// . During the transpilation process, the JSX syntax is replaced with calls to MyReact.createElement, but these calls are not actually executed. The transpiler doesn't run your code, it just transforms it.

// The calls to MyReact.createElement are executed later, when the transpiled JavaScript code is run in the browser. At this point, MyReact.createElement is expected to return actual DOM elements that can be added to the webpage.

// So, in your out.js file, the MyReact.createElement calls are just code that will be run in the browser. They're not the result of running MyReact.createElement during the build process.

