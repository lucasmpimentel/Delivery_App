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
  const [localCart, setLocalCart] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setShoppingCart, setTotalPrice, totalPrice } = useContext(Context);

  const fetchProducts = async () => {
    const allProducts = await products.getAll();
    setProductsList(allProducts);
  };

  const productById = (clicked) => (
    productsList.find(({ id }) => Number(id) === Number(clicked))
  );

  const localCartById = (clicked) => (
    localCart.find(({ id }) => Number(id) === Number(clicked))
  );

  const filterById = (clicked) => (
    localCart.filter(({ id }) => Number(id) !== Number(clicked))
  );

  const handleAdd = ({ target: { name: clicked } }) => {
    const cartItem = localCartById(clicked);
    if (cartItem) {
      cartItem.amount += 1;
      return setLocalCart([...localCart]);
    }
    const selItem = productById(clicked);
    selItem.amount = 1;
    return setLocalCart([...localCart, selItem]);
  };

  const handleRemove = ({ target: { name: clicked } }) => {
    const cartItem = localCartById(clicked);
    console.log(cartItem);
    if (cartItem && cartItem.amount > 1) {
      cartItem.amount -= 1;
      return setLocalCart([...localCart]);
    }
    const newCar = filterById(clicked);
    setLocalCart(newCar);
  };

  const handleAmount = ({ target: { name: id, value } }) => {
    const cartItem = localCartById(id);
    if (!cartItem) {
      const selectedProduct = productById(id);
      selectedProduct.amount = value.replace(/^0|-+/, '');
      setLocalCart([...localCart, selectedProduct]);
    } else {
      cartItem.amount = value.replace(/^0|-+/, '');
      setLocalCart([...localCart]);
    }
  };

  const amount = (id) => {
    const item = localCartById(id);
    if (!item) {
      return 0;
    }
    return item.amount;
  };

  const handleSubmitCart = () => {
    setShoppingCart(localCart);
    navigate('/customer/checkout');
  };

  useEffect(() => {
    if (!productsList) {
      fetchProducts();
    }
    if (localCart.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    const total = localCart.reduce((acc, item) => (
      acc + (Number(item.price) * Number(item.amount))
    ), 0);
    setTotalPrice(total.toFixed(2).replace('.', ','));
  }, [localCart]);

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
