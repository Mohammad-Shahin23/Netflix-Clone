import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../src/components /Navbar/Navbar";
import Home from "../src/components /Home/Home";
import FavList from "../src/components /FavList/FavList "
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <NavBar />
   <Home />
   <Routes>
    <Route path="/" elemant={<Home />}></Route>
    <Route path="/Favlist" elemant={<FavList />}></Route>


   </Routes>
   
   </>
  );
}

export default App;
