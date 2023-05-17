import React from "react";
import {Link,Routes,Route, Router} from 'react-router-dom'


export const BgImage = () => {
  return (
    <>
      <div className="header">
        <div className="content">
        <nav className="Navbar">
          <h2>HP</h2>
          <ul>
            <li>
              <Link to="/about" >about</Link>
            </li>
            <li>
              <Link to="/projects" >projects</Link>
            </li>
            <li>
              <Link to="/contacts" >contacts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/projects" element={<h1>Projects</h1>}/>
          <Route path="/contacts" element={<h1>Contacts</h1> }/>
        </Routes>
        </div>
      </div>
    </>
  );
};
