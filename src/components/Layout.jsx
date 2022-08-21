import { Container, Header, Logo, Navigation } from './Layout.styled';
import { NavLink, Outlet } from 'react-router-dom';
// import { movieService } from '../services/movieApi';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Movies">Movies</NavLink>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};
