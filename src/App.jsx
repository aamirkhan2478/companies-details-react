import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:symbol" element={<DetailsPage />} />
    </Routes>
  </>
);

export default App;
