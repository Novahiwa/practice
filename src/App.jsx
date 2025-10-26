import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Land from "./pages/Land"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Land />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
