import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModelMovies from "../ModalMovie/ModalMovie"
import { useState } from 'react';
import axios from 'axios';
// import UpdateForm from '../UpdateModel/UpdateModel';





function Movie(props) {

    const deleteMovie = async () => {
        // console.log(props.item.id);
        const serveURL = process.env.REACT_APP_serverURL;
        const response = await axios.delete(`${serveURL}/myMovie/${props.item.num}`);
    }

    const [showFlag,setShowFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    const handleShow = (item) =>{
        console.log(item);
        setClickedMeme(item);
        setShowFlag(true);
    }

    const handleClose = () =>{
        setShowFlag(false);
    }

    
    // const [showUpFlag,setShowUFlag] = useState(false);
    // const handleUpShow = (item) =>{
    //     console.log(item);
    //     setClickedMeme(item);
    //     setShowUFlag(true);
    // }

    // const handleUpClose = () =>{
    //     setShowFlag(false);
    // }

  
    
   
    
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
                    {/* <Button variant="primary" onClick={() => {handleShow(props.item)}}>more options </Button> */}

                    {(props.parentComp === "Home") ?  <Button variant="primary" onClick={() => {handleShow(props.item)}}>more options </Button>  : ""}
                    {(props.parentComp === "FavList") ?
                        <>
                            {/* <Button variant="success" onClick={handleUpShow}>Update</Button> */}
                            <Button variant="danger" onClick={deleteMovie}>Delete</Button>
                        </>

                        : ""}
                </Card.Body>
        </Card>
     </Col>

       <ModelMovies showFlag={showFlag} handleClose={handleClose} memeData={clickedMeme}/>
       {/* <UpdateForm  showFlag={showUpFlag} handleClose={handleUpClose}  memeData={clickedMeme}/> */}


       </> 
    );
}

export default Movie;