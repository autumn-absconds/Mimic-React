(() => {
  // App.jsx
  function App() {
    return /* @__PURE__ */ MyReact.createElement("div", null, /* @__PURE__ */ MyReact.createElement("h1", null, "Hello, world!"));
  }
  var App_default = App;
})();



// here the MyReact.createElement is called , it was just replaced by the transpiler with the function definition of MyReact.createElement earlier in the build.js execution , so that when the out.js file is executed , the function is ready to be called and executed.

// so when this fie is executed the MyReact.createElement function is called and the function returns the object {type:'div',props:null,children:[{type:'h1',props:null,children:['Hello, world!']}]} which will be used to create the DOM element and add it to the webpage.