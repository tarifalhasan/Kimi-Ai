import { useState } from 'react';

import './App.css';
import { FeaturedData } from './constant/data';
import {
  Header,
  Hero,
  Statics,
  Featured,
  Team,
  Faq,
  Roadmap,
  SignUp,
  Footer,
  ASIConomics,
  Features,
  MobileMenu,
} from './components';

function App() {
  return (
    <>
      <Header />
      <MobileMenu />
      <Hero />
      <Statics />
      <Features />
      <Featured />
      <ASIConomics />
      <Team />
      <Faq />
      <Roadmap />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
