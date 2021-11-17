import { useEffect } from 'react';
import Product from '../../components/product';
import LoadingSpinner from '../../components/loading';
import { Container } from '../../constants/index';
import { ProductsWrapper } from './HomePageEl';
import { useDispatch, useSelector } from 'react-redux';
import { featchProducts, productsChange } from '../../redux/products/products.action';
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchProducts());
  }, [dispatch]);

  const handelProductsQuintity = (productThatAddToCart, decreaseQunitity) => {
    const newProducts = products.map((product) => {
      if (product._id === productThatAddToCart._id) {
        return { ...productThatAddToCart, countInStock: productThatAddToCart.countInStock - decreaseQunitity };
      } else {
        return product;
      }
    });

    dispatch(productsChange(newProducts));
    // TODO: call api and decrease count of stoke of product That will Add To Cart you shod do that and if you will not do that the products in api will be static and the count of stoke of evry product will be static and will not can to change it
  };

  return (
    <Container>
      <div>
        <ProductsWrapper>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <h3>sorry products not found</h3>
          ) : (
            products.map((product) => (
              <Product key={product._id} product={product} handelProductsQuintity={handelProductsQuintity} />
            ))
          )}
        </ProductsWrapper>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Container>
  );
};

export default HomePage;
