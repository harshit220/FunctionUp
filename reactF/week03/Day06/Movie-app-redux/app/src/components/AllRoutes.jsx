import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Favaorites from './Favaorites'
import Home from './Home'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/favorites"element={<Favaorites/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes