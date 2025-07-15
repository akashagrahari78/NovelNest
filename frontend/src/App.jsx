import React from 'react'
import "./index.css"
import ScrollToTop from './components/ScrollToTop'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import MainLayout from './pages/MainLayout'
import ReviewsPage from './pages/ReviewsPage'
import AddReviewPage from './pages/AddReviewPage'
import Book from './pages/Book'
import SearchReviews from './pages/SearchReviews'
import Test from './pages/Test'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer'


const App = () => {
  return (
  <>
  <ScrollToTop />
  <ToastContainer/>
   <Routes>
    <Route path='/' element = {<MainLayout> <Home/> </MainLayout>  } />
    <Route path='/about' element = {<MainLayout> <About/> </MainLayout>  } />
    <Route path='/reviews' element = {<MainLayout>  <ReviewsPage/> </MainLayout> } />
    <Route path='/post/:postId' element  = {<MainLayout> <Book/></MainLayout>  } />
    {/* <Route path='/book/:bookId' element  = {<Book/> } /> */}
    <Route path='/add-review' element = {<MainLayout>  <AddReviewPage/> </MainLayout> } />
    <Route path='/contact' element = {<MainLayout>  <Contact/> </MainLayout> } />
    <Route path='/login' element = {<Login/>} />
    <Route path='signup' element = {<SignUp/>} />
    <Route path='/profile' element = {<Profile/>} />
    <Route path='/test' element = {<Test/>} />
    <Route path='/search' element={<MainLayout><SearchReviews /></MainLayout>} />
   </Routes>
   <Footer/>

   {/* <Footer/> */}
 </>

  )
}

export default App
