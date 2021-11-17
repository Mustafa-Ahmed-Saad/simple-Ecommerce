import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { ProductButtons, Category, Price, ProductItemStyled } from './ProductEl';
import { ToastContainer, toast } from 'react-toastify';

const Product = ({ product, handelProductsQuintity }) => {
  const { _id, name, category, price, image } = product;

  const dispatch = useDispatch();

  const addItemToCartHadeler = () => {
    dispatch(addItemToCart({ ...product, qty: 1 }));
    // handelProductsQuintity({ ...product, qty: 1 }, 1);
  };

  return (
    <div>
      <ProductItemStyled>
        <img src={image} alt={name} />
        <h3>
          <Link to={`/products/${_id}`}>{name}</Link>
        </h3>
        <Category>{category}</Category>
        <Price>{price}</Price>
        <ProductButtons>
          <button
            onClick={() => {
              addItemToCartHadeler();
              toast.success(`${name} add to cart`, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              });
            }}
          >
            Add To Cat
          </button>
        </ProductButtons>
      </ProductItemStyled>
      {/* we dont put c here because if we put it here will reunde 10 so we put it in father () homepage and only put here the toast.dark to show the ToastContainer  */}
    </div>
  );
};

export default Product;
