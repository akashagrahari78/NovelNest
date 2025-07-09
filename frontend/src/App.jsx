import React from 'react'
import "./index.css"
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import { ToastContainer, toast } from 'react-toastify';
import Test from './components/Test'
import MainLayout from './pages/MainLayout'
import ReviewsPage from './pages/ReviewsPage'
import AddReviewPage from './pages/AddReviewPage'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from './pages/Book'


const App = () => {
  return (
 <div  >
  
  <ToastContainer/>
   <Routes>
    <Route path='/' element = {<MainLayout> <Home/> </MainLayout>  } />
    <Route path='/about' element = {<MainLayout> <About/> </MainLayout>  } />
    <Route path='/reviews' element = {<MainLayout>  <ReviewsPage/> </MainLayout> } />
    <Route path='/book/:bookId' element  = {<MainLayout> <Book/></MainLayout>  } />
    <Route path='/add-review' element = {<MainLayout>  <AddReviewPage/> </MainLayout> } />
    <Route path='/contact' element = {<MainLayout>  <Contact/> </MainLayout> } />
    <Route path='/login' element = {<Login/>} />
    <Route path='signup' element = {<SignUp/>} />
    <Route path='/profile' element = {<Profile/>} />
    <Route path='/test' element = {<Test/>} />
   </Routes>

   {/* <Footer/> */}
 </div>

  )
}

export default App
