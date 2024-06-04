import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Homepage from './Pages/homepage';
import  Contact from './Pages/Contact';
import NotFoundPage from './Pages/NotFoundPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>      
      <Route index element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)



// APP CONTENT
const App = () => {
  return <RouterProvider router={ router } />
}

export default App;
