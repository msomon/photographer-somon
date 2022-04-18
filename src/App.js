
import './App.css';
import Navbar from '././Component/Navbar/Navbar'
import Home from '././Component/Home/Home'
import Blogs from '././Component/Blogs/Blogs'
import About from '././Component/About/About'
import Login from '././Component/Login/Login'
import { Route, Routes } from 'react-router-dom';
import Registar from './Component/Registar/Registar';
import Checkout from './Component/Home/Bundle/Checkout/Checkout';
import NotFound from './Component/NotFound/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/checkout' element={<RequireAuth>
        <Checkout></Checkout>
       </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
