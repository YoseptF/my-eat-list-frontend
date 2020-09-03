import styled from 'styled-components';

const Food = styled.section`
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 70px - 4rem);
  max-width: 640px;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  @media only screen and (max-height: 360px){
    max-height: calc(100vh - 70px - 2rem);
  }
`;

const FoodItem = styled.article`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 0.7rem;
  box-shadow: 0px 0px 10px 1px rgba(47,58,90,1);
  transform: scale(1);
  will-change: transform;
  transition: transform 300ms ease-in-out;
  &:hover{
    transform: scale(0.95)
  }

  @media only screen and (max-width: 374px){
    grid-column: span 2;
  }

  img{
    height: 10vh;
  }
  h1{
    padding-left: 1rem;
  }
`;

const More = styled.button`
  grid-column: span 2;
  align-self: end;
  height: 3rem;
  background: ${props => props.theme.secondary};
  border: none;
  font-weight:bold;
  cursor: pointer;
  &:active, &:hover{
  background: ${props => props.theme.primary};
  }
`;

const Search = styled.form`
  grid-column: span 2;
  position: sticky;
  top: 0;

  input{
    height: 2rem;
    width: 100%;
    padding: 1rem;
    line-height: 1rem;
  }
`;

const FoodModel = styled.article`
  position: fixed;
  touch-action: none;
  height: calc(100vh - 70px - 4rem);
  max-width: 640px;
  width: 100%;
  background: ${props => props.theme.primary};
  left: 50%;
  top: 50%;
  z-index: 100;
  transform: translate(-50%,-50%) scale(${props => (props.open ? 1 : 0)});
  will-change: transform;
  transition: transform 300ms ease-in-out;
  i{
    position: absolute;
    left: 97%;
    top: 3%;
    transform: translate(-97%, -3%) rotate(0deg);
    will-change: transform;
    transition: transform 500ms ease-in-out;
    font-size: 2rem;
    cursor: pointer;
    &:hover{
      border-radius: 100%;
      transform: translate(-97%, -3%) rotate(360deg);
    }
  }
`;

const ModelInfo = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      height: 25vh;
    }
  }
  .gallery{
    display: flex;
    flex-wrap: wrap;
  }
`;

const GalleryImage = styled.article`
  cursor: pointer;
  height: 12vh;
  flex: 25% 0 1;
  background-image: url(${props => props.image});
  background-size: cover;
  transform: scale(1);
  will-change: transform;
  transition: transform 300ms ease-in-out;
  &:hover{
    transform: scale(0.9)
  }
`;

export {
  Food, FoodItem, More, Search, FoodModel, ModelInfo, GalleryImage,
};
