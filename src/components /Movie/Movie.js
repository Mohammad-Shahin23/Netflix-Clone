import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import ModelMovies from "../ModalMovie/ModalMovie"
import UpdateModal from '../UpdateModel/UpdateModel';
import { useState , useEffect } from 'react';




function Movie(props) {


    const [showFlag,setShowFlag] = useState(false);
    const [updateFlag,setUpdateFlag] = useState(false);
    const [newArr, setNewArr] =useState([]);

    const [clickedMeme, setClickedMeme] = useState({});
    const handleShow = (item) =>{
        console.log(item);
        setClickedMeme(item);
        setShowFlag(true);
    }

    const showUpdateModal= (item) =>{
        setUpdateFlag(true);
        setClickedMeme(item);
        console.log(item);
    }

    const closeUpdateModal = () =>{
        setUpdateFlag(false);
    }

    const handleClose = () =>{
        setShowFlag(false);
    }

    const takeNewArrFromChild = (arr) => {
        // console.log("parent Comp",arr);
        // props.takeNewArr(arr);
        setNewArr(arr);
    }

   

    useEffect(()=>{
        setNewArr(props.favArr);
    }, [props.favArr])
   
    
    return (
        <>
          <Row xs={1} md={4} className="g-4">
                        {newArr.map((item) => {
                            return <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ props.item.poster_path} />
                                    <Card.Body>
                                        <Card.Title>{item.meme_name}</Card.Title>
                                        <Card.Text>
                                            <p>{item.top_text}</p>
                                            <p>{item.tags}</p>
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => {handleShow(item)}}>More</Button>
                                        <Button variant="success" onClick={() =>{showUpdateModal(item)}}>Update</Button>
                                        <Button variant="danger">Delete</Button>


                                    </Card.Body>
                                </Card>
                            </Col>
                        })}
                    </Row>

         {/* <Col>
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ props.item.poster_path} />
                    <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        <p>{props.item.topText}</p>
                        <p>{props.item.tags}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={() => {handleShow(props.item)}}>more options</Button>
                    <Button variant="success" onClick={() =>{showUpdateModal(props.item)}}>Update</Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
        </Card>
     </Col> */}

       <ModelMovies showFlag={showFlag} handleClose={handleClose} memeData={clickedMeme}/>
       <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} item={clickedMeme} takeNewArrFromChild={takeNewArrFromChild}/>


       </> 
    );
}

export default Movie;