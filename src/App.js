import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../src/components /Navbar/Navbar";
import Home from "../src/components /Home/Home";
import FavList from "../src/components /FavList/FavList ";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <NavBar />
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Favlist" element={<FavList />}></Route>


   </Routes>
   
   </>
  );
}

export default App;
