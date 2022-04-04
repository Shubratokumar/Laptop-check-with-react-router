import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllReviews from './components/AllReviews/AllReviews';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path = '/' element = {<Home></Home>}></Route>
       <Route path = '/allreviews' element = {<AllReviews></AllReviews>}></Route>
       <Route path = '/dashboard' element = {<Dashboard></Dashboard>}></Route>
       <Route path = '/blogs' element = {<Blogs></Blogs>}></Route>
       <Route path = '/about' element = {<About></About>}></Route>
       <Route path = '*' element = {<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
