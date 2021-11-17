import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30;
  margin: 50px auto;

  img {
    border: 1px solid #cec9c9;
    width: 100%;
  }
`;

export const AboutProduct = styled.div`
  padding-left: 20px;
`;

export const ButtonAddToCart = styled.button`
  all: unset;
  margin: 20px 0;
  padding: 10px 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
  background-color: #580aff;
`;

export const ContinueShopping = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: #293241;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 20px;
  color: #fff;
`;
