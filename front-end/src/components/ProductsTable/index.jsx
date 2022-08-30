import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import Loading from '../Loading';
import productsMock from '../../productsMock';

export default function ProductsTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [localCart, setLocalCart] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);
  const [prodAmount, setProdAmount] = useState({});
  const {
    isLoading,
    setIsLoading,
    // setAuthorized,
    // authorized,
    // shoppingCart,
    setShoppingCart,
    // totalPrice,
    setTotalPrice,
  } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    console.log('products length', products.length);
    if (products.length === 0) {
      setProducts(productsMock);
    }
    setIsLoading(false);
  }, [products.length, setIsLoading]);

  const handleClick = ({ target }) => {
    const localProdFind = localCart.find((product) => product.id === +(target.value));

    if (!localProdFind) {
      const prodFind = products.find((product) => product.id === +(target.value));
      const newObj = {
        id: prodFind.id,
        name: prodFind.name,
        price: prodFind.price,
        amount: 1,
        totalPrice: prodFind.price };
      setLocalCart([...localCart, newObj]);
      setLocalTotal(localTotal + +(newObj.totalPrice));
      setProdAmount({ ...prodAmount, [prodFind.id]: 1 });
    } else {
      if (target.name === '+') {
        const attAmount = localProdFind.amount + 1;
        const attTotalPrice = localProdFind.price * attAmount;
        const attProduct = {
          ...localProdFind,
          amount: attAmount,
          totalPrice: attTotalPrice };
        const filterProds = localCart.filter((product) => product.id !== +(target.value));
        filterProds.push(attProduct);
        setLocalCart(filterProds);
        setLocalTotal(localTotal + attTotalPrice);
        setProdAmount({
          ...prodAmount, [localProdFind.id]: prodAmount[localProdFind.id] + 1 });
      }

      if (target.name === '-') {
        const attAmount = localProdFind.amount - 1;
        const attTotalPrice = localProdFind.price * attAmount;
        const attProduct = {
          ...localProdFind,
          amount: attAmount,
          totalPrice: attTotalPrice };
        const filterProds = localCart.filter((product) => product.id !== +(target.value));
        const attLocal = filterProds.push(attProduct);
        setLocalCart(attLocal);
        setLocalTotal(localTotal + attTotalPrice);
        setProdAmount({
          ...prodAmount, [localProdFind.id]: prodAmount[localProdFind.id] - 1 });
      }
    }
  };

  const handleSubmitCart = () => {
    setShoppingCart(localCart);
    setTotalPrice(localTotal);
    navigate('/customer/checkout');
  };

  const handleChange = ({ target }) => {
    const localProdFind = localCart.find((product) => product.id === +(target.name));

    if (!localProdFind) {
      const prodFind = products.find((product) => product.id === +(target.name));
      const newObj = {
        id: prodFind.id,
        name: prodFind.name,
        price: prodFind.price,
        amount: +(target.value),
        totalPrice: prodFind.price };
      setLocalCart([...localCart, newObj]);
      setLocalTotal(localTotal + +(newObj.totalPrice));
      // setProdAmount({ ...prodAmount, [prodFind.id]: +(target.value) });
    } else {
      const attProduct = {
        ...localProdFind,
        amount: +(target.value),
        totalPrice: localProdFind.price * +(target.value) };
      const filterProds = localCart.filter((product) => product.id !== +(target.name));
      filterProds.push(attProduct);
      setLocalCart(filterProds);
      setLocalTotal(localTotal + attTotalPrice);
      // setProdAmount({
      //   ...prodAmount,
      //   [localProdFind.id]: prodAmount[localProdFind.id] + +(target.value) });
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div>
        {products.map((product) => (
          <div key={ product.id }>
            <p
              datatest-id={ `customer_products__element-card-price-${product.id}` }
            >
              {`R$ ${product.price}`}
            </p>
            <img
              datatest-id={ `customer_products__img-card-bg-image-${product.id}` }
              src="../../assets/images/antarctica_pilsen_300ml.jpg"
              alt={ product.name }
            />
            <h3
              datatest-id={ `customer_products__element-card-title-${product.id}` }
            >
              { product.name }

            </h3>
            <button
              datatest-id={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              name="-"
              value={ product.id }
              onClick={ handleClick }
            >
              -
            </button>
            <input
              datatest-id={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              min="0"
              placeholder="0"
              name={ product.id }
              value={ localCart?.some((item) => +item.id === +product.id)
                ? localCart.find((item) => +item.id === +product.id).amount
                : 0 }
              onChange={ handleChange }
            />
            <button
              datatest-id={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
              name="+"
              value={ product.id }
              onClick={ handleClick }
            >
              +
            </button>
          </div>
        ))}
      </div>
      <button
        datatest-id="customer_products__button-cart"
        type="button"
        onClick={ handleSubmitCart }
      >
        { `Total R$:${localTotal}` }
      </button>
    </>
  );
}
