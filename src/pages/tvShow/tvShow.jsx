import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Herosecton from '../../herosection/herosecton'
import Footer from '../../footer/footer'
import List from '../../list/list'
import "./tvshow.scss"
function TvShow() {
    return (
        <div className="tvshow" >
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

export default TvShow

