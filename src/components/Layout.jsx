import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './Layout.module.scss';

const Layout = () => {
  const location = useLocation();
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            state={{ from: location }}
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            state={{ from: location }}
            to="/Movies"
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
