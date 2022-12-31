import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

/**
 * The layout component for the application, which contains the header and the outlet.
 * @returns {JSX.Element} The layout component for the application.
*/
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default Layout;
