import React from 'react';
import Hero from './Hero';
import About from './About';
import Theme from './Theme';
import Timeline from './Timeline';
import Updates from './Updates';
import FAQ from './FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <Timeline />
      <Updates />
      <FAQ />
    </>
  );
};

export default Home;


