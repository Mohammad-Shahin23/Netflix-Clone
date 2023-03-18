import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function ModelMovies(props) {
    return (
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.memeData.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+props.memeData.poster_path} width='100%'></Image>
                <p>{props.memeData.genre_ids}</p>
                <p>{props.memeData.original_language}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModelMovies;