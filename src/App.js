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
import ArticlePage from './ArticlePage';  // Import the ArticlePage component
import TrainingCarousel from './TrainingCarousel';
import NutritionCarousel from './NutritionCarousel';
import RecoveryCarousel from './RecoveryCarousel';
import TrainingArticles from './TrainingArticles';

function App() {

  const trainingItems = [
    { title: 'Training Item 1', image: 'path-to-image-1.jpg', description: 'Description 1' },
    { title: 'Training Item 2', image: 'path-to-image-2.jpg', description: 'Description 2' },
    // Add more training items as needed
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <SearchBar />
        <Routes>
        <Route path="/" element={<>
            <FeaturedCarousel />
            <TopArticles />
            <TrainingCarousel />
            <NutritionCarousel />
            <RecoveryCarousel />
          </>} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/training" element={<TrainingArticles />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

