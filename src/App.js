
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import LogOut from './Component/LogOut/LogOut';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';
import SignIn from './Component/SignIn/SignIn';

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
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
