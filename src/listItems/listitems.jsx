import React, {  useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitems.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "../store/Action/AddToList";  

function ListItems({ index, movie ,generss }) {
  const [isHovered, setIsHovered] = useState(false); 
  const favorites = useSelector((state) => state.moviesList);
  const dispatch = useDispatch();  
  
  const handleAddToList = (movie) => {
   console.log("Add to list:", movie);

    const isMovieInFavorites = favorites.some(
      (favMovie) => favMovie.id === index
    );

    if (isMovieInFavorites) { 
      console.log("Movie already in favorites list");
    } else {
      dispatch(addToList(movie));
      console.log("Movie added to favorites list");
    }
  };  
  return (
    <div className="test">
      <div
        className="ListItemsHandle"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         
          <img
            className="sliderImg"
            src={`${movie.Link ? movie.Link :movie.link}`}
            alt=""
            
          />
        
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon" onClick={() => handleAddToList(movie)}/>
            <ThumbUpAltOutlined className="icon" onClick={() => handleAddToList(movie)} />
            <ThumbDownAltOutlined className="icon"  />
          </div>
          
            <div className="itemsInfoTextLT"> 
              <span className="Age">{movie.type ? movie.type :movie.Type}</span>
              <span>{movie.Name ? movie.Name :movie.name}</span>
            </div>
           
            <div className="desc"><p>{ movie.description ? movie.description :movie.Description}</p></div>
          
         
            <div className="genre"> 
                     {generss.map((genre) => genre).join(", ")}  
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default ListItems;
