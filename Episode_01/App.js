const rootElement = document.getElementById("root");

// Use React 18's createRoot method
const root = ReactDOM.createRoot(rootElement);

// Create a React element
// const heading = React.createElement("h1", {}, "Hello World from React");---------

// const heading = React.createElement("h1", { id : "heading" }, "Hello World from React");

// how children && parent works ::


/*
      <div id="parent">
          <div id="child">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
          </div>
          <div id="child2">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
          </div>
    </div>
*/
 

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement("div", { id: "child" }, React.createElement('p',
  { id : "ptag" },
   [
    React.createElement('h1',{},'iam the first one'),
    React.createElement('h1',{},'iam the second one'),
    React.createElement('h1',{},'iam the third one')
   ]
)), React.createElement("div", { id: "child2" }, React.createElement('p',
{ id : "ptag" },
 [
  React.createElement('h1',{},'iam the first one'),
  React.createElement('h1',{},'iam the second one'),
  React.createElement('h1',{},'iam the third one')
 ]
))
  ]
);
// in the above code we can see an object the second parameter it is used to set id,classes to an
// html elemtnt like { id :'heading' } likeways



//how to create children siblings , in samelevel
/*
  <h1>Hii</h1>
  <h1>Hii</h1>
  <h1>Hii</h1>

  pass third argument of React.createElement as an array [
     React.createElement('h1',{},'iam the first one'),
     React.createElement('h1',{},'iam the secon one')
    ]
 */
console.log(parent)
root.render(parent);


// div
     dispatchEvent
