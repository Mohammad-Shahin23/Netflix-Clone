// import axios from "axios";

// import { useState } from "react";
// function flattenObject(obj) {
//   return [].concat(...Object.values(obj).map(value => {
//     return (typeof value === 'object') ? flattenObject(value) : value;
//   }));
// }
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList"



function Home() {

    
    const [movieArr, setMovieArr] = useState([]);
    const  sendReq = async () => {
        const serverUrl=`${process.env.REACT_APP_serverURL}/Trending`;
        const resData= await fetch(serverUrl);
        const data= await resData.json();
        console.log(data.results)
        setMovieArr(data.results);
    }
    useEffect(()=>{
        sendReq();
    }, [setMovieArr])
return(
<>
<h1> Hello from home </h1>
<button onClick={sendReq}>Send req</button>
<MovieList movieArr={movieArr}/>


</>
);
}

export default Home;