import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Seo from './Pages/Seo';
import Joomla from './Pages/Joomla';
import Ecommerce from './Pages/Ecommerce';
import Seguridad from './Pages/Seguridad';
import NotFoundPage from './Pages/NotFoundPage';

// APP CONTENT
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>        
        <Route index element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog/seo' element={<Seo />} />
        <Route path='/blog/joomla' element={<Joomla />} />
        <Route path='/blog/e-commerce' element={<Ecommerce />} />
        <Route path='/blog/seguridad' element={<Seguridad />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={ router } />
}

export default App;
