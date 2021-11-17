import styled from 'styled-components';

export const ProductItemStyled = styled.div`
  border: 1px solid #cec9c9;
  text-align: center;
  padding-bottom: 30px;

  img {
    max-height: 300px;
    width: 100%;
  }

  h3 {
    color: #118ab2;
    text-transform: uppercase;
  }
`;

export const Category = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
  color: #073b4c;
`;

export const Price = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;
export const ProductButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #580aff;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 15px auto 0 auto;
    padding: 10px 50px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
  }
`;
