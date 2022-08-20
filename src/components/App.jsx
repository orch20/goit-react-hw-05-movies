import { Route, Routes, NavLink } from 'react-router-dom';
import { Container, Header, Logo, Navigation } from './App.styled';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Movies">Movies</NavLink>
        </Navigation>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
