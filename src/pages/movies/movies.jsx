import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Herosecton from '../../herosection/herosecton'
import List from '../../list/list'
import Footer from '../../footer/footer'
import "./movies.scss"
function Movies() {
    return (
        <div className="movies" >
        <NavBar/>
        <Herosecton/>
        <List name ="Continue Watching For Group4"/>
          <List name="Korean"/>
          <List name="Popular on NetFlix"/> 
          <List name="Egyptien TV"/> 
          <List name="For You"/> 
          <List name="Recommended Movies"/> 
        <Footer/>
    </div> 
    )
}

export default Movies
