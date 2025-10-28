import './App.css'
import { NotFound } from './pages/404'
import { Apropos } from './pages/Apropos'
import { Home } from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home />,},  
  { path: "/apropos", element: <Apropos /> },
  { path: "/location/:id", element: <Location /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export { App };
