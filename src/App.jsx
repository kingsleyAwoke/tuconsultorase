import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Homepage from './Pages/homepage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>      
      <Route index element={<Homepage />} />
    </Route>
  )
)



// APP CONTENT
const App = () => {
  return <RouterProvider router={ router } />
}

export default App;
