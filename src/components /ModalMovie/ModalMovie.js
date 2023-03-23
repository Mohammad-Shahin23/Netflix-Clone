import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

function ModelMovies(props) {




    const addFavMovie = async () => {

        const serverURL = process.env.REACT_APP_serverURL;
        const obj = {
            title: props.memeData.title,
            poster_path: props.memeData.poster_path,
            overview: props.memeData.overview
        }
        console.log(obj);
         await axios.post(`${serverURL}/addMovie`, obj);
    }
    return (
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.memeData.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + props.memeData.poster_path} width='100%'></Image>
                <p>{props.memeData.overview}</p>
                <p>{props.memeData.original_language}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addFavMovie}>addFavMovie </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default ModelMovies;

// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Image from 'react-bootstrap/Image';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';



// function ModelMovies(props) {
//     const [comment, setComment] = useState("");
//     const addToFav = async () => {
//         const mySchema = {
//             title: props.memeData.title,
//             poster_path: props.memeData.poster_path,
//             overview: props.memeData.overview,
//             media_type: "Movie",
//             comment: comment
//         }
//         console.log(mySchema);
//         const responseData = await axios.post(`${addToFav}/addMovie`, mySchema);
//         console.log(responseData);
//         props.handleClose();

//     }
//     return (
//         <Modal show={props.showFlag} onHide={props.handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>{props.memeData.title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2 + props.memeData.poster_path`} width='100%'> </Image>
//                 {/* <p>{props.memeData.overview}</p> */}
//                 <InputGroup>
//                     <InputGroup.Text>Comment</InputGroup.Text>
//                     <Form.Control as="textarea" aria-label="With textarea" onChange={(e) =>{setComment(e.target.value)}} />
//                 </InputGroup>

//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={props.handleClose}>
//                     Close
//                 </Button>
//                 <Button variant="primary" onClick={addToFav}>Add to Favorites</Button>
//             </Modal.Footer>
//         </Modal >
//     )
// }

// export default ModelMovies;