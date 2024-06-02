import React,  { useState, useEffect } from 'react';
import SkeletonLoading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';


// SKELETON LOADING FUNCTION
const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? <SkeletonLoading />: <App />}
    </div>
  )
}

// APP CONTENT
const App = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default Loading
