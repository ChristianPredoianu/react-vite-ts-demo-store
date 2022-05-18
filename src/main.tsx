import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CartProvider from '@/store/cart-context/CartProvider';
import UserSearchProvider from '@/store/user-search-context/UserSearchProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartProvider>
      <UserSearchProvider>
        <App />
      </UserSearchProvider>
    </CartProvider>
  </BrowserRouter>
);
