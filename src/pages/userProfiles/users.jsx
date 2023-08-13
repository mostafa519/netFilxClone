import React from 'react'
import './user.css'
import AddIcon from '@mui/icons-material/Add';
function Userprofile() {
    return (
        <div className="container p-5 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="mt-5 mb-2">who's watching?</h1>
        <div className="container row p-5 w-100 ">
          <div className="col-md text-center ">
            <div className="box">
              <a href="/home">
                {" "}
                <img className='usersImg' src="images/smile1.png" alt="" />
              </a>
            </div>
            <p>
              <a href="/src/component/homepage/homepage.js">Mostafa Magdy</a>
            </p>
          </div>
          <div className="col-md text-center">
            <div className="box">
              <a href="/home">
                {" "}
                <img className='usersImg' src="images/smile2.png" alt="" />{" "}
              </a>
            </div>
            <p>
              <a href="/home">Abdelrahman alaa</a>
            </p>
          </div>
          <div className="col-md text-center">
            <div className="box">
              <a href="/home">
                {" "}
                <img className='usersImg' src="images/smile3.png" alt="" />{" "}
              </a>
            </div>
            <p>
              <a href="/Home">karem awad</a>
            </p>
          </div>
          <div className="col-md text-center">
            <div className="box">
              <a href="/home">
                {" "}
                <img className='usersImg' src="images/smile4.png" alt="" />{" "}
              </a>
            </div>
            <p>
              <a href="/home">Mostafa Ali</a>
            </p>
          </div>
          <div className="col-md text-center">
            <div className="boxAdd  d-flex justify-content-center align-items-center">
              <AddIcon className='icon'/>
            </div>
            <p>Add Profiles</p>
          </div>
        </div>
        <button className="btn btn-outline-dark text-white">Manage profiles</button>
      </div>
    )
}

export default Userprofile
