import './App.css'
import { Root } from './components/Root'
import { ErrorPage } from './pages/404'
import { Apropos } from './pages/Apropos'
import { Home } from './pages/Home'
import { Location } from './Pages/Location'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <Root />,
    
   children: [ 
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home />,},  
  { path: "/apropos", element: <Apropos /> },
  { path: "/location/:id", element: <Location /> },
  ],
  },
  
  { path: "*", element: <ErrorPage/> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export { App };
