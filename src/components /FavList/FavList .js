import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Movie from "../Movie/Movie";

function Favourites() {

    const [favMovieArr, setFavMovieArr] = useState([]);
    
    const getFavMovie = async () =>{
        const serverURL = process.env.REACT_APP_serverURL;
        const response = await axios.get(`${serverURL}/getMovies`);
        setFavMovieArr(response.data)
    }

    useEffect(()=>{
        getFavMovie();
    }, [favMovieArr])
    
    return(
        <>
            <h1>Favourite List</h1>
            <Row xs={1} md={4} className="g-4">
                {favMovieArr.map((item) => {
                    return (
                        <Col>
                            <Movie item={item} parentComp="FavList"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Favourites;




// import { useEffect, useState } from "react";
// import MemeList from './MemeList';

// function FavList(){
    
//     const [favArr, setFavArr] = useState([]);
//     const sendReq = async () => {
//         console.log(process.env.REACT_APP_serverURL);
//         const serverURL = `${process.env.REACT_APP_serverURL}/favMeme`;
//         const response = await fetch(serverURL);
//         const data = await response.json();
//         console.log(data)
//         setFavArr(data);
//     }

//     const takeNewArr = (newArr) =>{
//         console.log("Fav List Comp ",newArr);
//         setFavArr(newArr);
//     }

//     useEffect(()=>{
//         sendReq();
//     }, [])
    
//     return(
//         <>
//         <h1>FavList</h1>
//         <MemeList favArr={favArr} takeNewArr={takeNewArr}/>

        
//         </>
//     );
// }

// export default FavList