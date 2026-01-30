import React from 'react'
import { NavLink } from 'react-router-dom';
import './Page1.css'

const Page1 = () => {
  return (
    <aside className="sidebar">
        <h2 className='logo'> React JS</h2>
        <h3>Things to Learn</h3>
        <nav>
           <NavLink to="/basics" className="nav-link">Basics of React JS</NavLink>
            <NavLink to="/components" className="nav-link">AG Grid Integration with CRUD operation</NavLink>
            <NavLink to= "/props" className="nav-link">Prime React Table UI Component</NavLink>
            {/* <li><NavLink to="/events"> Events, Forms and Controlled Inputs</NavLink></li> */}
            <NavLink to="/integration" className="nav-link"> API Integration with Recharts Charts Library</NavLink>
            <NavLink to="/dynamicfilters" className="nav-link">Dynamic Cascading Filters</NavLink>
        </nav>
    </aside>
  )
}

export default Page1