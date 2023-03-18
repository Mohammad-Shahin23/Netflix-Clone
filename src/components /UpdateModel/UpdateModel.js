import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal(props) {

    const updateMovie = async (e) =>{
        e.preventDefault();
        const obj = {
            name: e.target.name.value,
            overview: e.target.overview.value,
            genre_ids : e.target.genre_ids.value,
            popularity: e.target.popularity.value,
            poster_path : e.target.image.value
        }
        console.log(props.item.id);
        const serverURl = `${process.env.REACT_APP_serverURL}/myMovies/${props.item.id}`
        const axiosRes = await axios.put(serverURl,obj);
        console.log(axiosRes.data);
        //close the update modal
        props.closeUpdateModal();
        //update the old FavArr
        props.takeNewArrFromChild(axiosRes.data);
        

        console.log(obj);
    }
    return (
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateMovie}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={props.item.name}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control name="image" type="text" defaultValue={props.item.poster_path}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control name="top_text" type="text" defaultValue={props.item.overview}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rank</Form.Label>
                        <Form.Control name="rank" type="text" defaultValue={props.item.popularity}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>tags</Form.Label>
                        <Form.Control name="tags" type="text" defaultValue={props.item.genre_ids}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeUpdateModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateModal;