import React from 'react'
import { Card} from 'antd';

import "./Basics.css"

const { Meta } = Card;

const Basics = () => {

  return (
    <>
    <div className="card-container">
      <Card
        hoverable
        className='cards'
        onClick={() => window.open("https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/", "_blank")}
        cover={
          <img
            draggable={false}
            className='cards-image'
            alt="example"
            href="https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/"
            src="https://c8.alamy.com/comp/2DAW2TH/react-js-inscription-against-laptop-and-code-background-learn-react-programming-language-computer-courses-training-2DAW2TH.jpg"
          />
        }
      >
        <Meta onClick={() => window.open("https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/", "_blank")} title="React JS Basic Concepts" href="https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/" description="https://www.geeksforgeeks.org/reactjs/reactjs-basics-concepts-complete-reference/" />
      </Card>
      <Card
        hoverable
        className='cards'
        onClick={() => window.open("https://www.w3schools.com/Js/js_es6.asp", "_blank")}
        cover={
          <img
            className='cards-image'
            draggable={false}
            alt="example"
            href="https://www.w3schools.com/Js/js_es6.asp"
            src="https://tse2.mm.bing.net/th/id/OIP.nFeC8hhmM9JdP0bx_It84QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
        }
      >
        <Meta onClick={() => window.open("https://www.w3schools.com/Js/js_es6.asp", "_blank")} title="JavaScript ES6 Features" href="https://www.w3schools.com/Js/js_es6.asp" description="https://www.w3schools.com/Js/js_es6.asp" />
      </Card>
      <Card
        hoverable
        className='cards'
        onClick={() => window.open("https://www.w3schools.com/react/react_hooks.asp", "_blank")}
        cover={
          <img
            className='cards-image'
            draggable={false}
            alt="example"
            href="https://www.w3schools.com/react/react_hooks.asp"
            src="https://blog.openreplay.com/images/understanding-react-hooks/images/hero.png"
          />
        }
      >
        <Meta onClick={() => window.open("https://www.w3schools.com/react/react_hooks.asp", "_blank")} title="React Hooks" href="https://www.w3schools.com/react/react_hooks.asp" description="https://www.w3schools.com/react/react_hooks.asp" />
      </Card>
    </div>

     <div className='card-container'>
        {/* <Collapse items={items} onChange={onChange} bordered={false} defaultActiveKey={["1"]} /> */}

      <Card
        hoverable
        className='cards'
        onClick={() => window.open("https://www.w3schools.com/react/react_jsx.asp", "_blank")}
        cover={
          <img
            draggable={false}
            className='cards-image'
            alt="example"
            href="https://www.w3schools.com/react/react_jsx.asp"
            src="https://frontbackgeek.com/wp-content/uploads/2022/02/react-js-basics-and-jsx-1024x576.png"
          />
        }
      >
        <Meta onClick={() => window.open("https://www.w3schools.com/react/react_jsx.asp", "_blank")} title="React JSX" href="https://www.w3schools.com/react/react_jsx.asp" description="https://www.w3schools.com/react/react_jsx.asp" />
      </Card>
      <Card
        hoverable
        className='cards'
        onClick={() => window.open("https://www.w3schools.com/react/react_events.asp", "_blank")}
        cover={
          <img
            className='cards-image'
            draggable={false}
            alt="example"
            href="https://www.w3schools.com/react/react_events.asp"
            src="https://i.ytimg.com/vi/00UEQqa7Dz8/maxresdefault.jpg"
          />
        }
      >
        <Meta onClick={() => window.open("https://www.w3schools.com/react/react_events.asp", "_blank")} title="React Events" href="https://www.w3schools.com/react/react_events.asp" description="https://www.w3schools.com/react/react_events.asp" />
      </Card>
      <Card
        hoverable
        className='cards'
        onClick={() => window.open("https://www.w3schools.com/react/react_props.asp", "_blank")}
        cover={
          <img
            className='cards-image'
            draggable={false}
            alt="example"
            href="https://www.w3schools.com/react/react_props.asp"
            src="https://i.ytimg.com/vi/KvapOdsFK5A/maxresdefault.jpg"
          />
        }
      >
        <Meta onClick={() => window.open("https://www.w3schools.com/react/react_props.asp", "_blank")} title="React Props" href="https://www.w3schools.com/react/react_props.asp" description="https://www.w3schools.com/react/react_props.asp" />
      </Card>
    </div>
    </>
    
  )
}

export default Basics