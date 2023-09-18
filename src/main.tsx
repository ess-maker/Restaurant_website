import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./main.scss"
import Navbar from './components/navbar/Navbar';
import App from './components/App';
import Footer from './components/footer/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
