import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';


const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default MainLayout
