import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModelMovies from "../ModalMovie/ModalMovie"
import { useState } from 'react';




function Movie(props) {

    const [showFlag,setShowFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    const handleShow = (item) =>{
        console.log(item);
        setClickedMeme(item);
        setShowFlag(true);
    }

    const handleclose = () =>{
        setShowFlag(false);
    }
   
    
    return (
        <>
         <Col>
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ props.item.poster_path} />
                    <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        <p>{props.item.topText}</p>
                        <p>{props.item.tags}</p>
                </Card.Text>
                    <Button variant="primary" onClick={() => {handleShow(props.item)}}>more options</Button>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
     </Col>

       <ModelMovies showFlag={showFlag} handleclose={handleclose} memeData={clickedMeme}/>


       </> 
    );
}

export default Movie;