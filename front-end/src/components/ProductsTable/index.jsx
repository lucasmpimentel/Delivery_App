import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
// import productsMock from '../../productsMock';
import getAllProducts from '../../services/customerProducts.service';

export default function ProductsTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [localCart, setLocalCart] = useState([]);
  const [localTotal, setLocalTotal] = useState(0);
  const {
    // isLoading,
    setAuthorized,
    authorized,
    // shoppingCart,
    setShoppingCart,
    // totalPrice,
    setTotalPrice,
  } = useContext(Context);

  const fetchProducts = async () => {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  };

  useEffect(() => {
    setAuthorized(true);
    console.log(authorized);
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length]);

  const handleClick = ({ target }) => {
    console.log('target', target);
    const localProdFind = localCart.find((product) => product.id === +(target.value));

    if (!localProdFind) {
      console.log('entrou no primeiro if');
      const prodFind = products.find((product) => product.id === +(target.value));
      const newObj = {
        id: prodFind.id,
        name: prodFind.name,
        price: prodFind.price,
        amount: target.name === '-' ? 0 : 1,
        totalPrice: prodFind.price };
      setLocalCart([...localCart, newObj]);
      setLocalTotal(+(localTotal + +(newObj.totalPrice)).toFixed(2));
    } else {
      if (target.name === '+') {
        console.log('positivo', target.name);
        const attAmount = localProdFind.amount + 1;
        const attTotalPrice = localProdFind.price * attAmount;
        const attProduct = {
          ...localProdFind,
          amount: attAmount,
          totalPrice: attTotalPrice };
        const filterProds = localCart.filter((product) => product.id !== +(target.value));
        filterProds.push(attProduct);
        setLocalCart(filterProds);
        setLocalTotal(+(localTotal + attTotalPrice).toFixed(2));
      }

      if (target.name === '-') {
        console.log('negativo', target.name);
        const attAmount = localProdFind.amount - 1;
        const attTotalPrice = localProdFind.price * attAmount;
        const attProduct = {
          ...localProdFind,
          amount: attAmount,
          totalPrice: attTotalPrice };
        const filterProds = localCart.filter((product) => product.id !== +(target.value));
        const attLocal = filterProds.push(attProduct);
        setLocalCart(attLocal);
        setLocalTotal(+(localTotal + attTotalPrice.toFixed(2)));
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
      setLocalTotal(+(localTotal + +(newObj.totalPrice)).toFixed(2));
    } else {
      const attProduct = {
        ...localProdFind,
        amount: +(target.value),
        totalPrice: localProdFind.price * +(target.value) };
      const filterProds = localCart.filter((product) => product.id !== +(target.name));
      filterProds.push(attProduct);
      setLocalCart(filterProds);
      setLocalTotal(+(localTotal + attProduct.totalPrice.toFixed(2)));
    }
  };

  return (
    <>
      <div>
        {products.map(({ id, name, price, url_image: urlImage }) => (
          <div key={ id }>
            <p
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              {`R$ ${price}`}
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${id}` }
              src={ urlImage }
              alt={ name }
            />
            <h3
              data-testid={ `customer_products__element-card-title-${id}` }
            >
              { name }

            </h3>
            <button
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              type="button"
              name="-"
              value={ id }
              onClick={ handleClick }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${id}` }
              type="number"
              min="0"
              placeholder="0"
              name={ id }
              value={ localCart?.some((item) => +item.id === +id)
                ? localCart.find((item) => +item.id === +id).amount
                : 0 }
              onChange={ handleChange }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${id}` }
              type="button"
              name="+"
              value={ id }
              onClick={ handleClick }
            >
              +
            </button>
          </div>
        ))}
      </div>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleSubmitCart }
      >
        { `Total R$:${localTotal}` }
      </button>
    </>
  );
}
