// import axios from "axios";

// import { useState } from "react";


function Home() {
    // const [movieArr , setMovieArr] = useState()
    const  sendReq = async () => {
        const serverUrl=`http//localhost:3001/trending`;
        const resData= await fetch(serverUrl);
        const data= await resData.json();
        console.log(data);
    }
return(
<>
<h1> Hello from home </h1>
<button onClick={sendReq}>Send req</button>

</>
);
}

export default Home;