import { Typography } from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import context from '../../context/context';
import storage from '../../utils/storage';
import Button from '../shared/Button';
import * as My from './style';

export default function CheckoutTable() {
  const ZERO = 0;
  const {
    shoppingCart,
    totalPrice,
    setTotalPrice,
    setShoppingCart,
  } = useContext(context);

  const recallCart = () => {
    const cart = storage.getLocalStorage('cart');
    if (!cart || cart.length === 0) return setShoppingCart([{}]);
    return setShoppingCart(cart);
  };

  useEffect(() => {
    if (!shoppingCart || shoppingCart.length === 0) {
      recallCart();
    }
    const total = shoppingCart.reduce((acc, item) => (
      acc + (Number(item.price) * Number(item.amount))
    ), 0);
    if (!total) return setTotalPrice(ZERO.toFixed(2));
    setTotalPrice(total.toFixed(2));
  }, [shoppingCart]);

  const handleClick = ({ target }) => {
    const element = target.parentNode.parentNode.parentNode;
    const itemIndex = element.firstChild.innerHTML - 1;
    const newCart = shoppingCart.filter((_item, index) => index !== itemIndex);
    storage.setLocalStorage('cart', newCart);
    setShoppingCart(newCart);
  };

  const multiply = (price, amount) => {
    const result = price * amount;
    return result.toFixed(2).replace('.', ',');
  };

  return (
    <My.Div>
      <My.CheckoutTable>
        <My.THead>
          <My.Tr>
            <My.Th>Item</My.Th>
            <My.Th>Descrição</My.Th>
            <My.Th>Quantidade</My.Th>
            <My.Th>Valor Unitário</My.Th>
            <My.Th>Sub-total</My.Th>
            <My.Th>Remover Item</My.Th>
          </My.Tr>
        </My.THead>
        <My.TBody>
          {
            shoppingCart.map((i, index) => (
              <My.Tr key={ index }>
                <My.Td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {i.name}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {i.amount}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {i.price.replace('.', ',')}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {multiply(i.price, i.amount)}
                </My.Td>
                <My.Td>
                  <Button
                    type="button"
                    onClick={ handleClick }
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                  >
                    Remover
                  </Button>
                </My.Td>
              </My.Tr>
            ))
          }
        </My.TBody>
      </My.CheckoutTable>
      <My.Total
        data-testid="customer_checkout__element-order-total-price"
      >
        <Typography variant="button">
          {`Total: R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
        </Typography>
      </My.Total>
    </My.Div>
  );
}
