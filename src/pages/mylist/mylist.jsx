import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../footer/footer";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import "./../../list/list.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";  
import ListItems from "../../listItems/listitems";
function MyList() {
    const favorite = useSelector((state) => state.moviesList);
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [movies] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const listRef = useRef();


    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber >= 0) {
          setSlideNumber(slideNumber - 1);
          if (slideNumber===0){
            if (currentPage !== 0) {
              setCurrentPage(currentPage - 1);
            }
            else{
              setCurrentPage(20);
            }
          }
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
          
        }
        if (direction === "right" && slideNumber <= movies.length - 6) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
          if (slideNumber===14){
            setCurrentPage(currentPage +1);
          }
    
        }
      };
    return (
        <>
            <NavBar></NavBar>
            <div className="list mt-5" style={{paddingTop:"160px" }}>
      <span className="listTitle">My List</span>
      <div className="WrapperTest">
      <div className="wrapperList">
        <ArrowBackIos
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="containerItemlist" ref={listRef}>
          {favorite.map((movie) => (
           <ListItems key={ movie.id} index={movie.id} movie={movie} generss ={movie.Genres} /> 
          ))}
        </div>
        <ArrowForwardIos
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
      </div>
    </div>
            <Footer></Footer>
        </>
    );
}

export default MyList;
