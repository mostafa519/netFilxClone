import React from 'react'
import "./Home.scss"
import NavBar from '../../NavBar/NavBar'
import Herosecton from '../../herosection/herosecton'
import List from '../../list/list'
import Footer from '../../footer/footer'

function Home() {
    return (
        <div className="Home " >
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

export default Home
