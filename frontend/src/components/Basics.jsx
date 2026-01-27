import React from 'react'
import { Collapse } from 'antd';
import "./Basics.css"

const Basics = () => {
const items = [
  {
    key: '1',
    label: "Basic Concepts",
    children: (
        <div>
          <p>
            JavaScript is a programming language used to build dynamic and
            interactive web applications. In React, JavaScript controls how
            data flows, how components behave, and how user actions are handled.
          </p>

          <p>
            JavaScript runs in the browser and allows updating the UI without
            reloading the page. Modern JavaScript (ES6+) makes the language
            cleaner and more powerful.
          </p>

          <p><strong>Variables:</strong> JavaScript uses <code>let</code> and <code>const</code> to store data.</p>

          <p><strong>Data Types:</strong> Number, String, Boolean, Object, Array, Undefined, Null.</p>

          <p><strong>Functions:</strong> Functions define reusable logic. Arrow functions are commonly used in React.</p>

          <p><strong>Objects:</strong> Objects store data in key-value pairs and represent real-world entities.</p>

          <p><strong>Arrays:</strong> Arrays store multiple values and are heavily used in React.</p>

          <p>
            <strong>Array Methods:</strong> Methods like <code>map</code> and
            <code>filter</code> are used to transform data and render lists in
            React.
          </p>

          <p>
            <strong>Destructuring:</strong> Used to extract values from objects
            and arrays in a clean way.
          </p>

          <p>
            <strong>Spread Operator:</strong> Used to copy or merge objects and
            arrays without mutating original data.
          </p>

          <p>
            <strong>Async & Await:</strong> Used to handle asynchronous
            operations like API calls.
          </p>

          <p>
            Understanding JavaScript is essential because React is built
            entirely on JavaScript.
          </p>
        </div>),
  },
  {
      key: "2",
      label: "JavaScript ES6 Features",
      children: (
        <div>
          <p>
            ES6 introduced modern features that make JavaScript easier to write
            and maintain. React applications heavily rely on ES6 syntax.
          </p>

          <p>
            <strong>Arrow Functions:</strong> Provide a concise way to write
            functions and automatically bind <code>this</code>.
          </p>

          <p>
            <strong>Destructuring:</strong> Extract values from objects and
            arrays for cleaner code.
          </p>

          <p>
            <strong>Spread Operator:</strong> Used to copy or merge arrays and
            objects without modifying the original data.
          </p>

          <p>
            <strong>Template Literals:</strong> Create strings with embedded
            expressions.
          </p>

          <p>
            These features improve readability and are essential for writing
            clean React code.
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: "JavaScript in React Context",
      children: (
        <div>
          <p>
            React is built entirely on JavaScript. Every component, event, and
            state update depends on JavaScript logic.
          </p>

          <p>
            <strong>State Management:</strong> JavaScript variables stored in
            state control how the UI updates.
          </p>

          <p>
            <strong>Event Handling:</strong> JavaScript functions handle user
            interactions like clicks and input changes.
          </p>

          <p>
            <strong>Rendering Lists:</strong> Array methods like
            <code> map()</code> are used to render components dynamically.
          </p>

          <p>
            <strong>API Integration:</strong> JavaScript handles HTTP requests
            and responses from backend services.
          </p>

          <p>
            Strong JavaScript fundamentals make React development easier and
            more efficient.
          </p>
        </div>
      ),
    }
];

const onChange=(key)=>{
    console.log(key)
}
  return (
    <>
    <h2>Basics about JavaScript</h2>
    <div className='collapse-div'>
        <Collapse items={items} onChange={onChange} bordered={false} defaultActiveKey={["1"]} />
    </div>
    </>
    
  )
}

export default Basics