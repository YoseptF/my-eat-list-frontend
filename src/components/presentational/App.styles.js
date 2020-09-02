import styled from 'styled-components';

const Nav = styled.nav``;

const GateForm = styled.div`
  position: absolute;
  background: ${props => props.theme.primary};
  display: ${props => (props.loggedIn ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  img{
    max-height: 150px;
    margin-bottom: 1rem;
  }
  form{
    display: flex;
    flex-direction: column;
    input{
      cursor: pointer;
      font-weight: bold;
      font-size: 1.15rem;
      min-width: 300px;
      margin: 1rem;
      height: 3rem;
      border-radius: 11px;
      border: 2px solid ${props => props.theme.dark};
      padding: 11px;
      text-align: center;
      &:focus{
        background: ${props => props.theme.secondary};
        cursor: pointer;
      }
    }
    input[type="submit"]:hover { 
      background: ${props => props.theme.secondary};
      cursor: pointer;
    }
  }
  span, span button {
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    background: none;
    border: none
  }
  span button { 
    cursor: pointer;
    text-decoration: underline;
    padding: 5px;
    &:hover{ 
      background: ${props => props.theme.secondary};
      cursor: pointer;
    }
  }
`;

const Main = styled.main``;

export { Nav, GateForm, Main };
