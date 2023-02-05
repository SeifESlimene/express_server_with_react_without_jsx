"use strict";

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);



const root = document.getElementById("root");
ReactDOM.render(element, root);