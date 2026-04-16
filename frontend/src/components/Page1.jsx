import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/logo192.png"
import './Page1.css'

const Page1 = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">{collapsed ? '>' : '<'}</button>
        <h2 className='logo'><span className="logo-icon"><img src={require("../assets/logo192.png")} alt="Favicon" style={{height:"28px", width:"28px"}} /></span><span className="logo-text">React JS</span></h2>
        <h3 className="heading-text">Things to Learn</h3>
        <nav>
           <NavLink to="/basics" className="nav-link"><span className="link-icon">B</span><span className="link-text">Basics of React JS</span></NavLink>
            <NavLink to="/components" className="nav-link"><span className="link-icon">C</span><span className="link-text">AG Grid Integration with CRUD operation</span></NavLink>
            <NavLink to= "/props" className="nav-link"><span className="link-icon">P</span><span className="link-text">Prime React Table UI Component</span></NavLink>
            {/* <li><NavLink to="/events"> Events, Forms and Controlled Inputs</NavLink></li> */}
            <NavLink to="/integration" className="nav-link"><span className="link-icon">I</span><span className="link-text">API Integration with Recharts Charts Library</span></NavLink>
            <NavLink to="/dynamicfilters" className="nav-link"><span className="link-icon">D</span><span className="link-text">Dynamic Cascading Filters</span></NavLink>
        </nav>
    </aside>
  )
}

export default Page1