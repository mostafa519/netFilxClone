import React from 'react'
import NavBar from './../../NavBar/NavBar';
import Footer from '../../footer/footer';
import List from '../../list/list';
import "./new&popular.scss"
function NewPopular() {
    return (
        <div className="NewPopular" >
        <NavBar/>
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

export default NewPopular
