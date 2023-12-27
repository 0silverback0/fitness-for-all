import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import FeaturedCarousel from './FeaturedCarousel';
import Header from './Header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import TopArticles from './TopArticles';
import Footer from './Footer';
import ArticlePage from './ArticlePage'; 
import TrainingArticles from './TrainingArticles';
import NutritionArticles from './NutritionArticles';
import RecoveryArticles from './RecoveryArticles';
import BackToTopButton from './BackToTopButton';
import AmazonAdCombo from './AmazonAdCombo';

function App() {

  return (
    <Router>
      <div className="App">
        <BackToTopButton />
        <Navbar />
        <Header />
        <SearchBar />
        <Routes>
        <Route path="/" element={<>
            <FeaturedCarousel />
            <TopArticles />
           
          </>} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/training" element={<TrainingArticles />} />
          <Route path='/nutrition' element={<NutritionArticles />} />
          <Route path='/recovery' element={<RecoveryArticles />} />
        </Routes>
        <AmazonAdCombo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

