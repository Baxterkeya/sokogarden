import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproducts from './Components/Addproducts';
import Getproducts from './Components/Getproducts';
import Mpesapayment from './Components/Mpesapayment';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';


function App() {
  return (
    <BrowserRouter>

    
    <div className="App">
      {/* navbargoes here  */}
      <Navbar />
      <header className='bg-primary'>
      <h1 className='text-danger text-center'>Welcome to Reactjs</h1> 
      </header>
      <nav>
      <Link to = "/signup" className='btn btn-outline-danger me-2'>Signup</Link> 
      <Link to = "/signin" className='btn btn-outline-danger me-2'>Signin</Link>  
      <Link to = "/add" className='btn btn-outline-danger me-2'>Addproducts</Link> 
      <Link to = "/" className='btn btn-outline-danger me-2'>Getproducts</Link> 
      {/* <Link to = "/mpesa" className='btn btn-outline-danger me-2'>Mpesapayment</Link>  */}
      </nav>

      {/* Routes here */}
      <Routes>
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/signin" element={ <Signin/> } />
        <Route path="/add" element={ <Addproducts/> } />
        <Route path="/" element={ <Getproducts/> } />
        <Route path="/mpesa" element={ <Mpesapayment/> } />

       </Routes>

     
      
     {/* footer goes here   */}
     <Footer/>
    </div>
    
    </BrowserRouter>


  );
}

export default App;
