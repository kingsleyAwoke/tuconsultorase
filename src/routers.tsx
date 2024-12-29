import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Inicio } from './pages/inicio';
import { useGlobalContext } from './provider';
import { Loading } from './components/Loading';
import { Seo } from './pages/blogs/seo';
import { Joomla } from './pages/blogs/jooomla';
import { Ecommerce } from './pages/blogs/ecommerce';
import { Diseno } from './pages/blogs/diseno';
import { Seguridad } from './pages/blogs/seguridad';

export const Routers = () => {
  const [state] = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={<Inicio />} />

        {/* blogs */}
        <Route path='/seo' element={<Seo />} />
        <Route path='/joomla' element={<Joomla />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
        <Route path='/seguridad' element={<Seguridad />} />
        <Route path='/diseno' element={<Diseno />} />

        <Route path='*' element={<Inicio />} />
      </Routes>

      <NotificationContainer />
      <Loading state={state.loading} opacity={0.9} />
    </BrowserRouter>
  )
}