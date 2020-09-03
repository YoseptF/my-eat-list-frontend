import styled from 'styled-components';

const Home = styled.section`
  padding: 2rem;
  position: relative;
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

export { Home, Header, TopTracker };
