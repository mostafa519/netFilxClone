import React from "react";
import "./browse.css";
import Dropdown from 'react-bootstrap/Dropdown'; 

export default function Browse() {
    return (
        <>

            <div className="containeer contianer-fluid m-4 p-5 row ">

                <div className="col-md-3 ps-4 colors">
                    <h4>Browse By Language</h4>
                </div>
                <div className="col-md-6 m-0">
                    <div className="row">
                        <div className="col-md-4 ">
                            <p className=" pt-2 colors">Select Your Pereferences</p>
                        </div>
                        <div className="col-md-4 colors m-0 p-0 pt-2">
                            <Dropdown>
                                <Dropdown.Toggle className="btnEdit bg-dark" as={"button"}id="dropdown-button-dark-example1">
                                Original Language
                                </Dropdown.Toggle>
                                <Dropdown.Menu as={"button"} className="btnEdit2" variant="dark" >
                                <Dropdown.Item eventKey="1"  className="bg-dark" >
                                Original Language
                                    </Dropdown.Item>
                                    <Dropdown.Item className="bg-dark" eventKey="2">Dabbing</Dropdown.Item>
                                    <Dropdown.Item className="bg-dark" eventKey="3">Subtitles</Dropdown.Item> 
                                </Dropdown.Menu>
                            </Dropdown>
                   
                        </div>

                        <div className="col-md-4 colors m-0 ps-2 pt-2">
                        <Dropdown >
                                <Dropdown.Toggle className="btnEdit" as={"button"}id="dropdown-button-dark-example1">
                                English
                                </Dropdown.Toggle>
                                <Dropdown.Menu as={"button"} className="btnEdit2" variant="dark" >
                                <Dropdown.Item className="bg-dark" eventKey="1">
                                English
                                    </Dropdown.Item>
                                    <Dropdown.Item className="bg-dark" eventKey="2">Arabic</Dropdown.Item>
                                    <Dropdown.Item className="bg-dark" eventKey="3">Fernch</Dropdown.Item> 
                                    <Dropdown.Item className="bg-dark" eventKey="4">German</Dropdown.Item> 
                                    <Dropdown.Item className="bg-dark"  eventKey="5">Spanish</Dropdown.Item> 
                                    <Dropdown.Item className="bg-dark" eventKey="6">Arabic</Dropdown.Item> 
                                    <Dropdown.Item className="bg-dark" eventKey="7">Fernch</Dropdown.Item> 
                                </Dropdown.Menu>
                            </Dropdown>
                        
                        </div>
                    </div>
                </div>

                <div className="col-md-3">

                    <div className="row">
                        <div className="col-md-3">
                            <p className="pt-2 colors">Sort By</p>
                        </div>
                        <div className="col-md-8 ps-3 colors  pt-2">
                        <Dropdown className="btnEdit2">
                                <Dropdown.Toggle className="btnEdit" as={"button"}id="dropdown-example1">
                                Suggestions
                                </Dropdown.Toggle>
                                <Dropdown.Menu as={"button"} variant="dark" >
                                <Dropdown.Item className="bg-dark" eventKey="1">
                                Suggestions For you
                                    </Dropdown.Item>
                                    <Dropdown.Item className="bg-dark" eventKey="2">Year Released</Dropdown.Item>
                                    <Dropdown.Item className="bg-dark" eventKey="3">A-Z</Dropdown.Item> 
                                    <Dropdown.Item className="bg-dark" eventKey="4">Z-A</Dropdown.Item> 
                                </Dropdown.Menu>
                            </Dropdown>
                           
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}
