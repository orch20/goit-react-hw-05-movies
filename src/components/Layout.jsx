import { Container, Header, Logo, Navigation } from './Layout.styled';
import { NavLink, Outlet } from 'react-router-dom';
// import { movieService } from '../services/movieApi';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Navigation>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
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
