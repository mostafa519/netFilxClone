import { useRef, useState, useEffect } from "react";
import "./list.scss";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ListItems from "./../listItems/listitems";
import axiosInstanceNetflix from "../AxiosConfig/instanceAxios";

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const listRef = useRef();

  useEffect(() => {
    axiosInstanceNetflix.get("/discover/movie",
    {
      params: { 
        page: currentPage,
      },
    }).then((res) => {  
      setMovies(res.data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
   
  }, [currentPage]);

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
  
    <div className="list ">
      <span className="listTitle">Continue to watch</span>
      <div className="WrapperTest">
      <div className="wrapperList">
        <ArrowBackIos
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="containerItemlist" ref={listRef}>
          {movies.map((movie, index) => (
           
            <ListItems key={index} index={index} movie={movie} />
          ))}
        </div>
        <ArrowForwardIos
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
      </div>
    </div>
  );
}
