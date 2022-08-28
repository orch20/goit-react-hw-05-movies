import { Container, Header, Logo, Navigation } from './Layout.styled';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
// import { movieService } from '../services/movieApi';

export const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Navigation>
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
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};
