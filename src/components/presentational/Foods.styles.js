import styled from 'styled-components';

const Food = styled.section`
  overflow-y: scroll;
  max-height: calc(100vh - 140px);
  grid-gap: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FoodItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 0.7rem;
  padding: 0.4rem;
  box-shadow: 0px 0px 10px 1px rgba(47,58,90,1);
  img{
    height: 90%;
    margin-right: 0.5rem;
  }
`;

export { Food, FoodItem };
