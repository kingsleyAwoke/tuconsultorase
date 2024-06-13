import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Seo from './Pages/Seo';
import Joomla from './Pages/Joomla';
import Ecommerce from './Pages/Ecommerce';
import Seguridad from './Pages/Seguridad';
import Diseon from './Pages/Diseon';
import SeoImagne from './Pages/SeoImagne';
import Herramienta from './Pages/Herramienta';
import NotFoundPage from './Pages/NotFoundPage';


// APP CONTENT
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // MAINLAYOUT ROUTER
      <Route path='/' element={<MainLayout />}>

        {/* INDEX PAGE */}
        <Route index element={<Homepage />} />

        {/* BLOG PAGES */}
        <Route path='/blog/seo' element={<Seo />} />
        <Route path='/blog/joomla' element={<Joomla />} />
        <Route path='/blog/e-commerce' element={<Ecommerce />} />
        <Route path='/blog/seguridad' element={<Seguridad />} />
        <Route path='/blog/diseon' element={<Diseon />} />

        {/* UTILIDADES PAGES */}
        <Route path='/utilidades/seo-imagen' element={<SeoImagne />} />
        <Route path='/utilidades/herramienta' element={<Herramienta />} />
        
        {/* CONTACT PAGE */}
        <Route path='/contact' element={<Contact />} />

        {/* NOT FOUND REOUTER */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={ router } />
}

export default App;
