import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './components/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
    </Route>
  )
)

function App() {

  return (
    <>
          <HomePage/>
        
    </>
  )
}

export default App
