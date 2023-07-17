import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
    </Route>
  )
)

function App() {

  return (
    <>
          <RouterProvider router={router}/>
          <Hero/>
          <Shop/>
          <Testimonials/>
          <Contact/>


    </>
  )
}

export default App
