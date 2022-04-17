
import './App.css';
import Navbar from '././Component/Navbar/Navbar'
import Services from '././Component/Services/Services'
import Home from '././Component/Home/Home'
import Blogs from '././Component/Blogs/Blogs'
import About from '././Component/About/About'
import Login from '././Component/Login/Login'
import NotFound from '././Component/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom';
import Registar from './Component/Registar/Registar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
