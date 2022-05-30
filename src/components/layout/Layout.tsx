import { Outlet, useLocation } from 'react-router-dom';
import Nav from '@/components/nav/Nav';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Footer from '@/components/layout/footer/Footer';

export default function Layout() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      <Nav />
      <Outlet />
      <ScrollToTop />
      {location.pathname !== '/' && <Footer />}
    </>
  );
}
