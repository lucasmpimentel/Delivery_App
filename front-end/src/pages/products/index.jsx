import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import products from '../../services/products.service';
import storage from '../../utils/storage';
import * as My from './style';

export default function Products() {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState(null);
  // const [localCart, setLocalCart] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    setShoppingCart,
    setTotalPrice,
    totalPrice,
    shoppingCart,
  } = useContext(Context);

  const fetchProducts = async () => {
    const allProducts = await products.getAll();
    setProductsList(allProducts);
  };

  const productById = (clicked) => (
    productsList.find(({ id }) => Number(id) === Number(clicked))
  );

  const cartById = (clicked) => (
    shoppingCart?.find(({ id }) => Number(id) === Number(clicked))
  );

  const filterById = (clicked) => (
    shoppingCart?.filter(({ id }) => Number(id) !== Number(clicked))
  );

  const handleAdd = (clicked) => {
    if (!shoppingCart) {
      const firstItem = productById(clicked);
      firstItem.amount = 1;
      return setShoppingCart([firstItem]);
    }
    const cartItem = cartById(clicked);
    if (cartItem) {
      cartItem.amount = Number(cartItem.amount) + 1;
      return setShoppingCart([...shoppingCart]);
    }
    const selItem = productById(clicked);
    selItem.amount = 1;
    return setShoppingCart([...shoppingCart, selItem]);
  };

  const handleRemove = (clicked) => {
    const cartItem = cartById(clicked);
    if (cartItem && cartItem.amount > 1) {
      cartItem.amount = Number(cartItem.amount) - 1;
      return setShoppingCart([...shoppingCart]);
    }
    const newCar = filterById(clicked);
    setShoppingCart(newCar);
  };

  const handleAmount = ({ target: { value } }, id) => {
    if (!shoppingCart) {
      const firstItem = productById(id);
      firstItem.amount = value.replace(/^0|-+/, '');
      return setShoppingCart([firstItem]);
    }
    const cartItem = cartById(id);
    if (!cartItem) {
      const selectedProduct = productById(id);
      selectedProduct.amount = value.replace(/^0|-+/, '');
      setShoppingCart([...shoppingCart, selectedProduct]);
    } else {
      cartItem.amount = value.replace(/^0|-+/, '');
      setShoppingCart([...shoppingCart]);
    }
  };

  const amount = (id) => {
    const item = cartById(id);
    if (!item) {
      return 0;
    }
    return item.amount;
  };

  const handleSubmitCart = () => {
    storage.setLocalStorage('cart', shoppingCart);
    navigate('/customer/checkout');
  };

  const calcTotal = () => {
    const total = shoppingCart?.reduce((acc, item) => (
      acc + (Number(item.price) * Number(item.amount))
    ), 0);
    setTotalPrice(Number(total));
  };

  useEffect(() => {
    if (!productsList) {
      fetchProducts();
    }
    if (shoppingCart && shoppingCart.length >= 1) {
      calcTotal();
      setIsDisabled(false);
    } else {
      const recoveryCart = storage.getLocalStorage('cart');
      if (recoveryCart && recoveryCart.length >= 1) {
        calcTotal();
        setIsDisabled(false);
        setShoppingCart(recoveryCart);
      }
      setIsDisabled(true);
    }
    if (shoppingCart) calcTotal();
  }, [shoppingCart]);

  return (
    <main>
      <Navbar />
      <My.Section>
        {
          productsList && productsList.map((prod, index) => (
            <ProductCard
              key={ index }
              id={ prod.id }
              title={ prod.name }
              price={ (prod.price).replace('.', ',') }
              urlImage={ prod.url_image }
              add={ handleAdd }
              remove={ handleRemove }
              handleAmount={ handleAmount }
              amount={ Number(amount(prod.id)) }
            />
          ))
        }
      </My.Section>
      <My.Btn
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleSubmitCart }
        disabled={ isDisabled }
        variant="contained"
        size="large"
      >
        Total R$:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {Number(totalPrice).toFixed(2).replace('.', ',')}
        </span>
      </My.Btn>
    </main>
  );
}
