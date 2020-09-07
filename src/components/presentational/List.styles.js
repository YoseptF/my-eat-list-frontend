import styled from 'styled-components';

const Lists = styled.section`
  height: calc(100vh - 70px - 4rem);
  overflow-y: scroll;
`;

const ListItem = styled.section`
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
  .calories{
    text-align:center;
    display: flex;
    align-items: center;
    i{
      margin-left: 0.5rem;
      font-size: 1.5rem;
      }
    .fa-sort-down{
      color: green;
    }
    .fa-sort-up{
      color: red;
    }
    .fa-sort-down,.fa-sort-up{
      font-size:2rem;
    }
  }
`;

export { Lists, ListItem };
