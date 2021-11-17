export const addItemToCart = (cartItems, itemToAdd) => {
  const ItemExistInCartItems = cartItems.find((item) => {
    return item._id === itemToAdd._id;
  });

  // if element is exest in catItems
  if (ItemExistInCartItems) {
    // return array that content all cartitems and replace the item that wnt to add to cat with { ...item, qty: item.qty + itemToAdd.qty }
    return cartItems.map((item) => (item._id === itemToAdd._id ? { ...item, qty: itemToAdd.qty } : item));
  }

  // if element is not exest in catItems
  return [...cartItems, itemToAdd];
};
