import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './Components/pages/home';
// import About from './Components/pages/about';
// import Contact from './Components/pages/contact';
// import ErrorPage from './Components/pages/Error';

// import{createBrowserRouter ,RouterProvider} from 'react-router-dom';
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
    
//   ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <RouterProvider router={router}/>
    
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
