import NavBar from "../../NavBar/NavBar";
import Browse from "../browseByLanguages/browse";
import Footer from "../../footer/footer";   
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../AxiosConfig/fireBase";
import { useEffect, useState } from "react"; 

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListItems from "../../listItems/listitems";
export default function BrowsePage() {
  const [movies, setMovies] = useState([]);
  const [moviesGenre, setMoviesGenres] = useState([[]]);

  function getData(){
    const resultsCollection=collection(db,"NetflixClone");
    getDocs(resultsCollection).then(res=>{ 
     const result =res.docs.map(doc=>({
      data:doc.data(),
      id:doc.id
     }))
     setMovies(result); 
     setMoviesGenres(result.map(m=>m.data.Genres));
     
    }).catch(err=>{console.log(err);});
  }
  useEffect(() =>{
    getData();

  },[]);
  // console.log(movies);
  return (
    <>
        <div className="Home " > 
        <NavBar></NavBar>  
         <Browse></Browse> 

         <Container fluid>

<Row>

  {movies.map((movie) => (

    <Col key={movie.data.id} className="mb-4">

      <Card className="h-100 " style={{ width: "14rem" }}>
      <ListItems key={ movie.id} index={movie.id} movie={movie.data} generss ={moviesGenre} />
      
      </Card>

    </Col>

  ))}

</Row>

 

</Container>

         {/* <List name ="Continue Watching For Group4"/>
          <List name="Korean"/>
          <List name="Popular on NetFlix"/> 
          <List name="Egyptien TV"/> 
          <List name="For You"/> 
          <List name="Recommended Movies"/>  */}

       
      </div>
      <Footer></Footer>
    </>

  );
}


