import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import BookDetail from './components/BookDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book/:bookId",
    element: <BookDetail />,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < ChakraProvider >
   <RouterProvider router={router} />
  </ ChakraProvider >
);
