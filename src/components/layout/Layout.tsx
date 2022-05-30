import Nav from '@/components/nav/Nav';
import { Outlet } from 'react-router-dom';
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
