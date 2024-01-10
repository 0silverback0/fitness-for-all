import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import FeaturedCarousel from './FeaturedCarousel';
import Header from './Header';
import {React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import TopArticles from './TopArticles';
import Footer from './Footer';
import ArticlePage from './ArticlePage'; 
import TrainingArticles from './TrainingArticles';
import NutritionArticles from './NutritionArticles';
import RecoveryArticles from './RecoveryArticles';
import MindSetArticles from './MIndSetArticles';
import BackToTopButton from './BackToTopButton';
import Disclaimer from './Disclaimer';
import ReactGA from 'react-ga';
import MetaDescription from './MetaDescription';

ReactGA.initialize('G-GXQLQ87K9N');

function App() {

  useEffect(() => {
    ReactGA.initialize('G-XXXXXXXXXX');
    
    console.log('home page')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="App">
        <MetaDescription />
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
          <Route path='/mindset' element={<MindSetArticles />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

