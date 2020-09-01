import styled from 'styled-components';

const Nav = styled.nav``;

const Loggin = styled.div`
  position: absolute;
  background: ${props => props.theme.primary};
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main``;

export { Nav, Loggin, Main };
