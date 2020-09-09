import styled, { css } from 'styled-components';

const Nav = styled.nav`
  ul{
    position: relative;
    height: 100%;
    background: ${props => props.theme.dark};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    &::after{
    content: "";
    position: absolute;
    top: -15px;
    height: 15px;
    width: 120%;
    box-shadow: 0px 10px 6px -6px rgba(0,0,0,0.75);
  }
  }
  `;

const NavItem = styled.li`
  position: relative;
  list-style: none;
  background: ${props => (props.selected ? props.theme.primary : 'transparent')};
  width: 100%;
  height: 100%;
  a{
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  i{
    font-size: 2rem;
    color: ${props => (props.selected ? 'white' : props.theme.grey)};
  }
  
  ${props => props.selected && css`
  
  &::before{
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      z-index: 10;

      width: 0; 
      height: 0; 
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 6px solid white;
      /* background: red; */
    }
  `}
`;

const GateForm = styled.div`
  position: absolute;
  z-index: 100;
  background: ${props => props.theme.primary};
  display: ${props => (props.loggedIn ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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

const Main = styled.main`
  background: ${props => props.theme.light};
  max-width: 640px;
  margin: 0 auto;
  overflow: hidden;
  display: grid;
  min-height: 100vh;
  width: 100vw;
  grid-template-rows: auto 1fr 70px;
  #navTitle{
    display: grid;
    place-items:center;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.light};
    font-size: 1.5rem;
    font-weight:bold;
    text-transform: capitalize;
    height: 4rem;
    @media only screen and (max-height: 360px){
      height: 2rem;
    }
  }
`;

const LineMeter = styled.div`
  position: relative;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '7px'};
  background: ${props => props.theme.grey || 'grey'};
  border-radius: 11px;
  margin: 1rem auto;
  &:after{
    content: "";
    background-color: ${props => (props.maxed ? props.theme.danger || 'red' : props.theme.primary || 'blue')};
    display: block;
    position: absolute;
    width: ${props => `${props.percentaje}%` || '70%'};
    height: 100%;
    left: 0;
    top: 0;
    opacity: 1;
    transition: width 1s linear, opacity 0.5s ease 1s;
    border-radius: 11px;
  }
  &:active:after {
    width: 0%;
    opacity: 1;
    transition: 0s
  }
`;

export {
  Nav, GateForm, Main, NavItem, LineMeter,
};
