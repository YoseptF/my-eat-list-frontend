import styled, { css } from 'styled-components';

const Home = styled.section`
  position: relative;
  height: calc(100vh - 70px - 4rem);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin: 1rem;
  padding: 1rem;
  border-radius: 21px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 10px 1px rgba(47,58,90,1);
  img{
    max-height: 4rem;
    border-radius: 100%;
    border: 3px solid ${props => props.theme.dark};
  }
`;

const TopTracker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0.5rem auto;
`;

const Donut = styled.div`
  cursor: pointer;
  display: grid;
  place-items:center;
  transform: translate(0%,0%);
  width: 100px;
  height: 100px;
  will-change: width,height;
  transition: width 300ms ease-in-out, height 300ms ease-in-out;
  ${props => props.open && css`
    height: 100vh;
    width: 100vw;
    max-width: 640px;
    position: fixed;
    left: 50%;
    top: 50%; 
    transform: translate(-50%,-50%);
    background: #2f3a5aeb;
    z-index: 50;
  `}
  circle:nth-child(2){
    stroke: ${props => props.theme.primary} !important;
  }
`;

export {
  Home, Header, TopTracker, Donut,
};
