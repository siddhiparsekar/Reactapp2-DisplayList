// var React = require("react");
// var ReactDOM = require("react-dom");

//Above 2 lines can be written using import keyword as shown below

import React from "react";
import ReactDOM from "react-dom";

//----PART1
//render method comes from reactDOM module
//  ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW)
// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

//Here if you see h1 tag is used in the js file, THIS IS WHAT IS CALLED JSX!!
//Using JSX we were able to insert html in js
// where the html tags are picked up by the js compiler i.e babel to convert it into a js code for all the browsers to understand.
//If you add one more html tag, it is not going to work. Hence we use single div tag, since only one html element can be rendered!(you can render more by using react.fragment.... read more)

// Learn to render multiple hmtl tags in the JSX.
// ReactDOM.render(
//   <div>
//     <h1>My favourite foods!</h1>
//     <li>Pizza</li>
//     <li>Burger</li>
//     <li>Icecream</li>
//   </div>,
//   document.getElementById("root")
// );

//----PART2
// Learn to disply content inside a variable in JSX
const name = "Siddhi";
const num = 20;

ReactDOM.render(
  <div>
    <h1>Hello, I'm {name}!</h1>
    <p>My lucky number is {num}.</p>
  </div>,
  document.getElementById("root")
);
