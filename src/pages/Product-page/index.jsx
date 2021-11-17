import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loading';
import { Container } from '../../constants/index';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AboutProduct, ButtonAddToCart, ContinueShopping, ProductPageWrapper } from './ProuductPageEl';
import { featchSingleProduct } from '../../redux/single-product/product.action';
import { ToastContainer, toast } from 'react-toastify';

const ProuductPage = ({ handelProductsQuintity }) => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  const fetchProduct = () => {
    // const {
    //   data: { product },
    // } = await axios.get(`https://naga-electron.herokuapp.com/api/v1/products/${id}`);
    dispatch(featchSingleProduct(id));
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  const hadelSeletChange = (e) => {
    // confirm string to number
    setQuantity(+e.target.value);
  };

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <h3>this product is not found</h3>
      ) : (
        <ProductPageWrapper>
          <img src={product.image} alt={product.name} />
          <AboutProduct>
            <h1
              style={{
                color: '#e76f51',
                fontWeight: 'bold',
              }}
            >
              {product.name}
            </h1>
            <p style={{ lineHeight: 1.5, fontSize: '.9rem' }}>{product.description}</p>
            <div>
              Category:
              <span
                style={{
                  color: '#e76f51',
                  fontWeight: 'bold',
                }}
              >
                {product.category}
              </span>
            </div>
            <div>
              Count in Stock:
              <span
                style={{
                  color: '#e76f51',
                  fontWeight: 'bold',
                }}
              >
                {product.countInStock}
              </span>
            </div>
            <div>
              Number of reviews:
              <span
                style={{
                  color: '#e76f51',
                  fontWeight: 'bold',
                }}
              >
                {product.numReviews}
              </span>
            </div>

            <select onChange={hadelSeletChange}>
              {[...Array(product.countInStock).keys()].map((count) => (
                <option value={count + 1}>{count + 1}</option>
              ))}
            </select>
            <br />

            <ButtonAddToCart
              onClick={() => {
                dispatch(addItemToCart({ ...product, qty: quantity }));
                // handelProductsQuintity({ ...product, qty: quantity }, quantity);
                toast.success(`${quantity} of ${product.name}  add to cart`, {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              add to cart
            </ButtonAddToCart>

            <ContinueShopping to="/">Continue Shopping</ContinueShopping>
          </AboutProduct>
          <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </ProductPageWrapper>
      )}
    </Container>
  );
};

export default ProuductPage;
