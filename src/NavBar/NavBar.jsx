import React, {  useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Form from "react-bootstrap/Form";
import "./NavBar.scss";
import {  signOut } from "firebase/auth";

// import { Link } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../AxiosConfig/fireBase";
// import { useDispatch } from "react-redux"; 

function NavBar({ onSearch }) {
  // const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate(); 
 
  // const handleSearchFromNav = (e) => {
  //   e.preventDefault();
  //   if (searchQuery.trim() !== '') {
  //     onSearch(searchQuery);
  //     setSearchQuery('');
  //   }
  // }

  // const handleInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };
 

  const handleLogout = () => {               
      signOut(auth).then(() => {  
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => { 
      });}
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    if ((inputRef.current.value === null) | (inputRef.current.value === "")) {
      setIsOpened((currentState) => !currentState);
    }
  };
  const handleInputFocus = () => {
    inputRef.current.focus();
  };
  const handleSearchBar = () => {
    handleSearch();
    handleInputFocus();
  };
  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  
  const clearSearchInput = () => {
    setSearchValue("");
    handleInputFocus();
  };

  console.log(searchValue);
  return (
    <>
      <div className={isScrolled ? "sticky scrolled" : "sticky"}>
        <Navbar
          className="navbar justify-content-around"
          expand="lg"
          id="navbar"
        >
          <Container className="container-fluid my-1 p-0 navbarContainer">
            <Navbar.Brand className="navbar__brand">
              <Nav.Link>
                <img
                  className="navbar__logo"
                  src="./icons/NetflixLogo.svg"
                  alt="Netflix Logo"
                />
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNetflix__navbar--Toggle">
              <img
                className="navbar__logo"
                src="./icons/NetflixLogo.svg"
                alt="Netflix Logo"
              />
            </Navbar.Toggle>
            <Navbar.Collapse
              id="mainNetflix__navbar--Toggle"
              className="navbar-collapse block"
            >
              <Nav className="me-auto  mb- mb-lg-0">
                <Link className="nav__link"  to="/home">
                  Home
                </Link>
                <Link className="nav__link" as={Link} to="/tvShow">
                  TV Shows
                </Link>
                <Link className="nav__link" as={Link} to="/Movies">
                  Movies
                </Link>
                <Link className="nav__link" as={Link} to="/Newpop">
                  New & Popular
                </Link>
                <Link className="nav__link" as={Link} to="/mylist">
                  My List
                </Link>
                <Link className="nav__link"  to="/browse">
                  Browse by Languages
                </Link>
              </Nav>

              <Nav className="d-flex hide">
                {/* search part */}
                <Form className={isOpened ? "search search__open" : "search"} onSubmit={handleSearch}>
                  <img
                    className="search__icon"
                    src="./icons/search.svg"
                    alt="search"
                    onClick={handleSearchBar}
                  />
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder="Title, people, genres"
                    className="search__input"
                    aria-label="Search"
                    onBlur={handleSearch}
                    value={searchValue}
                    onChange={handleSearchInput}
                  />
                  <img
                    className={
                      searchValue !== ""
                        ? "search__close theSearchHasValue"
                        : "search__close"
                    }
                    src="./icons/close.svg"
                    alt="close"
                    onClick={clearSearchInput}
                  />
                </Form>
                {/* the end ot the search component */}

                <NavLink className="nav__link" as={Link} to="/">
                  Kids
                </NavLink>

                {/* this well be fixed notifications part */}
                <div className="nav-element notifications">
                  <a href="-" className="navbar__btn">
                    <img alt="imgbell" src="./icons/bell.svg" />
                  </a>
                  <div className="notifications__body">
                    <img
                    alt="arrow"
                      className="notifications__body--arrow"
                      src="./icons/arrow down.svg"
                    />
                    {/* this is the part we gonna repeat */}
                    <div className="notifications__grid">
                      <img
                      alt="grid"
                        className="notifications__grid--img"
                        src="./images/notification.jpg"
                      />
                      <div className="notifications__grid--section">
                        <div>New Arrival</div>
                        <div>The Diplomat</div>
                        <span>1 day ago</span>
                      </div>
                    </div>
                    {/* this is the end of notifications repetend part */}
                  </div>
                </div>
                {/* this is the end of notifications part */}

                {/* this is the user dashboard access point */}
                <div className="nav-element profile arrowP">
                  <a className="navbar__btn row " href="-">
                    {/* add a user profile here  */}

                    <span className=" col p-0 m-0 d-flex justify-content-center arrowP">
                      <img className="profile__picture " src="./icons/p4.png" alt="profile" />
                    </span>
                    <span className="col-4 p-0 m-0 d-flex justify-content-center arrow">
                      <img
                        alt="menu"
                        className="profile__menu--toggle"
                        src="./icons/arrow down.svg"
                      />
                    </span>
                  </a>
                  <div className="profile__menu">
                    <img
                    alt="menu"
                      className="profile__menu--arrow"
                      src="./icons/arrow down.svg"
                    />
                    <ul className="profile__menu--list">
                      <li className="profile__menu--listItem">
                        <img
                        alt="profile menu"
                          className="profile__menu--listImg1"
                          src="./icons/p4.png"
                        />
                        <a className="profile__menu--btn" href="-">
                          User 1
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg1"
                          src="./icons/p4.png"
                        />
                        <a className="profile__menu--btn" href="-">
                          User 2
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg1"
                          src="./icons/p4.png"
                        />
                        <a className="profile__menu--btn" href="-">
                          User 3
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg1"
                          src="./icons/kids.png"
                        />
                        <a className="profile__menu--btn" href="-">
                          Kids
                        </a>
                      </li>
                    </ul>
                    <ul className="profile__menu--list">
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg2"
                          src="./icons/pen.svg"
                        />
                        <a className="profile__menu--btn" href="-">
                          Manage Profiles
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg2"
                          src="./icons/transfer.svg"
                        />
                        <a className="profile__menu--btn" href="-">
                          Transfer Profile
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg2"
                          src="./icons/profile.svg"
                        />
                        <a className="profile__menu--btn" href="-">
                          Account
                        </a>
                      </li>
                      <li className="profile__menu--listItem">
                        <img
                        alt="images"
                          className="profile__menu--listImg2"
                          src="./icons/help.svg"
                        />
                        <a className="profile__menu--btn" href="-">
                          Help Center
                        </a>
                      </li>
                    </ul>
                    <ul className="profile__menu--listEnd">
                      <li className="profile__menu--listItem">
                        <a className="profile__menu--btn" href="/" as={Link} onClick={handleLogout}>
                          Sign out of Netflix
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* this is the end of the user dashboard access point */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
