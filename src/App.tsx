import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './organisms/Header/Header';
import Content from './organisms/Content/Content';
import Blog from './organisms/Blog/Blog';
import Cards from './organisms/Cards/Cards';
import CTA from './organisms/CTA/Cta';
import SingleNews from './organisms/SingleNews/SingleNews';
import SocialMedia from './organisms/SocialMedia/SocialMedia';

function App() {
  return (
    <>
     <Header/>
     <Content/>
     <CTA/>
     <Cards/>
     <Blog/>
     <SingleNews/>
     <SocialMedia/>
    </>
  );
}

export default App;
