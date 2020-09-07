import styled from 'styled-components';

const Options = styled.section`
  max-height: calc(100vh - 70px - 4rem);
  overflow-y: scroll;
`;

const Header = styled.header`
  margin: 1rem;
  padding: 1rem;
  border-radius: 21px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 10px 1px rgba(47,58,90,1);
  form{
    display: flex;
    flex-direction:column;
    width: 100%;
    input[type="submit"]{
      cursor: pointer;
      padding: 1rem;
      background: ${props => props.theme.primary};
      border: none;
      border-radius: 11px;
      font-weight: bold;
      font-size: 1.3rem;
      transform: scale(1);
      will-change: transform;
      transition: transform 300ms ease-in-out;
      &:hover, &:active{
      transform: scale(0.9);
      }
    }
  }

  button{
    cursor: pointer;
    border: none;
    font-size: 2.5rem;
    will-change: transform;
    transition: transform 300ms ease-in-out;
    transform: scale(1);
    &:hover{
    transform: scale(1.5);
    }
  }

`;

const FormGroup = styled.div`
  margin: 1rem;
  padding: 0 1rem;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {text-transform: capitalize;}
  input{
    text-align: center;
    padding: 1rem;
    line-height: 1rem;
    border: none;
    border-bottom: 1px solid ${props => props.theme.dark};
    &:focus{
      outline: none;
    }
  }
`;

const SelectLifeStyle = styled.div`
  margin: 1rem;
  padding: 0 1rem;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {text-transform: capitalize;}
  select{
    text-align: center;
    padding: 1rem;
    line-height: 1rem;
    border: none;
    border-bottom: 1px solid ${props => props.theme.dark};
    &:focus{
      outline: none;
    }
  }
`;

const ImageChanger = styled.form`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  input[type="submit"]{
    flex-grow: 1;
  }
`;

const Image = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
  border: 3px solid ${props => props.theme.dark};
  background: url(${props => props.src}) center center/cover;
`;

export {
  Options, Header, FormGroup,
  SelectLifeStyle, ImageChanger,
  Image,
};
