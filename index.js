//ReactDOM.render(<ul><li>bahubali</li><li>pushpa</li><li>sahoo</li><li>salaar</li></ul>,document.getElementById("root"))

// function Navbar() {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <form className="form-inline">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//         </nav>
//     );
// }

// function Main(){
//     return(
//         <h1>Hello,  world!</h1>
//     );
// };

// ReactDOM.render(<div>
//     <Navbar />
//     <Main />
// </div>, document.getElementById("root"));
//------------------------------------------------------------------------------------------

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const root = document.getElementById("root");
// const hedingElement = document.createElement( "h1" );
// hedingElement.textContent = "Hello, React!";
// HTMLHeadingElement.classList.add("header");
// console.log(hedingElement);


// ReactDOM.render(
//     <h1>this is root id parent</h1>
//     ,document.getElementById("root")
// );


// ReactDOM.render(<div>
//     <h1 className="header">Hello, React!</h1>
//     <p>This is a paragraph</p>
// </div>,document.getElementById('root'));
// ----------------------------------------------------------

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/


// const Nav = (
//     <nav>
//         <h1>TNR COFFE HOUSE</h1>
//         <ul>
//             <li>
//                 Pricing
//             </li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// );

// ReactDOM.render(Nav, document.getElementById('root'));
// ======================++++++++++++++++@@@@@@@@@@@#^%$&&$&%*^^^^^^^^^^^^^^^^^^^^^^^^##############$**********************
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const Sample = (
//     <nav class="navbar navbar-light bg-light">
//         <form class="form-inline">
//             <button class="btn btn-outline-success" type="button">Main button</button>
//             <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
//         </form>
//     </nav>
// );

// const root = document.getElementById("root");

// root.append(JSON.stringify(Sample));

// o/p:{"type":"nav","key":null,"ref":null,"props":{"class":"navbar navbar-light bg-light","children":{"type":"form","key":null,"ref":null,"props":{"class":"form-inline","children":[{"type":"button","key":null,"ref":null,"props":{"class":"btn btn-outline-success","type":"button","children":"Main button"},"_owner":null,"_store":{}},{"type":"button","key":null,"ref":null,"props":{"class":"btn btn-sm btn-outline-secondary","type":"button","children":"Smaller button"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}},"_owner":null,"_store":{}}

// to fix this issue do the ReactDOM.render()

// ReactDOM.render(Sample,document.getElementById("root"));
//---------------------------------------
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

//   const Page = (
//     <div>
//         <img src="react-logo.jpg" height="100px" width="85px"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>    
//             <li>Was first released in 2013</li>
//             <li>Was orginally created by Jordan Walke</li>
//             <li>Has well over 100k stars on github</li>
//             <li>Is maintained by Facebook</li>

//         </ul>

//     </div>
//   ) ;


//   ReactDOM.render(Page, document.querySelector("#root"));




// 1. Why do we need to `import React from "react"` in our files?
// If the jsx want to run then we need to import react from the react this make .React is what defines jsx

// 2. If I were to console.log(page) in index.js, what would show up?
// retums the some javascript object.React elements that describe what react should eventually add to the real dom

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```we need our jsx to be nested under a single parent element
// 

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// declarative means jsut we need to telll what we need to accomplish then react will understand and it will do.In imperative we nedd to tell the how to do like step by step everything

// 5. What does it mean for something to be "composable"?
// we have small pices that we put together to make something larger than the induividal pices.

//


// const nums =[1,2,3,4,5,6]
// const Page = nums.map((nums)=>{
//     return nums*2;
// })

// console.log(Page)

// const names = ['nithin','reddy','babu','chinni','ruchi']
// const upperCase=names.map((name)=>{
//     return name[0].toUpperCase() +name.slice(1);
// })

// console.log(upperCase)

// const pokeman =  ['Nithin','Reddy']
// const p = pokeman.map(function(item){
//    return  `<p>${item}</p>`; 
// })

// console.log(p)

