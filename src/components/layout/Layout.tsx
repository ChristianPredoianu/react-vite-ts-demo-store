import { Outlet } from 'react-router-dom';
import Nav from '@/components/nav/Nav';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <ScrollToTop />
    </>
  );
}
