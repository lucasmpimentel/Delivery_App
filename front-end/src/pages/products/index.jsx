import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import products from '../../services/products.service';
import './style.css';

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
    shoppingCart.find(({ id }) => Number(id) === Number(clicked))
  );

  const filterById = (clicked) => (
    shoppingCart.filter(({ id }) => Number(id) !== Number(clicked))
  );

  const handleAdd = ({ target: { name: clicked } }) => {
    const cartItem = cartById(clicked);
    if (cartItem) {
      cartItem.amount = Number(cartItem.amount) + 1;
      return setShoppingCart([...shoppingCart]);
    }
    const selItem = productById(clicked);
    selItem.amount = 1;
    return setShoppingCart([...shoppingCart, selItem]);
  };

  const handleRemove = ({ target: { name: clicked } }) => {
    const cartItem = cartById(clicked);
    if (cartItem && cartItem.amount > 1) {
      cartItem.amount = Number(cartItem.amount) - 1;
      return setShoppingCart([...shoppingCart]);
    }
    const newCar = filterById(clicked);
    setShoppingCart(newCar);
  };

  const handleAmount = ({ target: { name: id, value } }) => {
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
    setShoppingCart(shoppingCart);
    navigate('/customer/checkout');
  };

  useEffect(() => {
    if (!productsList) {
      fetchProducts();
    }
    if (shoppingCart.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    const total = shoppingCart.reduce((acc, item) => (
      acc + (Number(item.price) * Number(item.amount))
    ), 0);
    setTotalPrice(total.toFixed(2).replace('.', ','));
  }, [shoppingCart]);

  return (
    <main>
      <Navbar />
      <section className="test">
        {
          productsList && productsList.map((prod, index) => (
            <ProductCard
              key={ index }
              id={ prod.id }
              name={ prod.name }
              price={ (prod.price).replace('.', ',') }
              urlImage={ prod.url_image }
              add={ handleAdd }
              remove={ handleRemove }
              handleAmount={ handleAmount }
              amount={ amount(prod.id) }
              className="card"
            />
          ))
        }
      </section>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleSubmitCart }
        disabled={ isDisabled }
      >
        Total R$:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {totalPrice}
        </span>
      </button>
    </main>
  );
}
