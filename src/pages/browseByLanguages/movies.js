import React, { useEffect, useState } from "react"; 
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./edit.css";  
import Browse from './browse'; 
import NavBar from "../../NavBar/NavBar";
import Footer from "../../footer/footer";
import axiosInstanceNetflix from "../../AxiosConfig/instanceAxios";
export default function Movies() {  
  const [movies, setMovies] = useState([]);  
  useEffect(() => {
    axiosInstanceNetflix.get("/discover/movie",
    {
       params :{
        page:10,
       }
    }).then((res) => {  
      setMovies(res.data.results);
    })
    .catch((err) => {
      console.log(err.message);
    }); 
   
  }, [ ]);

  return (
    <>
    <NavBar></NavBar>
      {/* <Browse></Browse> */}
      <div className='container-fluid pt-5'>
                <div className='list-body px-5 mt-4'> 
                    <Row xs={6} md={6} className="main-design g-2  pt-4">
                        {movies.map((movie) => (
                            <Col key={movie.id}>
                                <Card className='card-design'>
                                    <Card.Img className='card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></Card.Img>
                                    
                                </Card>
                            </Col>
                            
                        ))}
                    </Row>
                </div>
            </div>
      <Footer></Footer>
    </>
  );
}
