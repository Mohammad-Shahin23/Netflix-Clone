import Row from 'react-bootstrap/Row';
import Movie from "../Movie/Movie"



function MovieList(props) {
    console.log(props)
    
    return (
        <>
            
            {/* <button onClick={sendReq}>send req</button> */}
            <Row xs={1} md={4} className="g-4">
                {props.movieArr.map((item)=> {
                   
                   return <Movie item={item} />  
                    
                })}

            </Row>
        </>
    );
}

export default MovieList;
