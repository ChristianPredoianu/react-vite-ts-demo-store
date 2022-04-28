import Nav from '@/components/nav/Nav';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="container">{children}</main>
    </>
  );
}
