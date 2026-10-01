import { Outlet } from 'react-router-dom';
// import Footer from './Footer';  // Example: Footer component

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}

      {/* Main content */}
      <main className="flex-grow">
        <Outlet /> 
      </main>

      {/* <Footer /> */}
    </div>
  );
}
