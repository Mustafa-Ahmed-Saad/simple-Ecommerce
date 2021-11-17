import React from 'react';
import { Container } from './../../constants/index';
import { useSelector, useDispatch } from 'react-redux';
import { CartPageStyled } from './CartPageEl';
import { Link } from 'react-router-dom';
import { deleteItemFromCart } from '../../redux/cart/cart.actions';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <CartPageStyled>
      <Container className="mt-4">
        {cartItems.length === 0 ? (
          <>
            <h3>
              no items <Link to="/">Go To Shopping</Link>
            </h3>
          </>
        ) : (
          <>
            <h3>your cart ({cartItems.length})</h3>
            <table class="table table-dark table-striped ">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Num</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ _id, name, price, qty }, idx) => (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{_id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    {/* TODO: make this qty a input to enable user to edit and decrease and increate this product */}
                    <td>{qty}</td>
                    <td>
                      <RiDeleteBinLine
                        style={{ color: 'red ', fontSize: '20px' }}
                        onClick={() => {
                          dispatch(deleteItemFromCart(_id));
                          toast.warn(`${name} removed from cart`, {
                            position: 'bottom-center',
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                          });
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </CartPageStyled>
  );
};

export default CartPage;
