import { BrowserRouter ,  Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home";
import Details from "../Pages/Details/Details";




const Routers =()=> { 

 return ( 
     <BrowserRouter> 
      <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/:id"  element={<Details/>} />
      </Routes>
     </BrowserRouter>
     
 )

}
export default Routers; 
