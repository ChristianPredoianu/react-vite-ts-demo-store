import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Category from '@/pages/Category';
import ProductDetails from '@/pages/ProductDetails';
import UserSearch from '@/pages/UserSearch';
import '@/sass/main.scss';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:category" element={<Category />} />
          <Route path="shop/product-details/:id" element={<ProductDetails />} />
          <Route path="/usersearch" element={<UserSearch />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
