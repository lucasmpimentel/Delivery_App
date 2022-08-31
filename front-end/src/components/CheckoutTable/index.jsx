import React, { useEffect, useContext } from 'react';
import context from '../../context/context';

export default function CheckoutTable() {
  const {
    shoppingCart,
    totalPrice,
    setTotalPrice,
    setShoppingCart,
  } = useContext(context);

  useEffect(() => {
    const total = shoppingCart.reduce((acc, item) => (
      acc + (Number(item.price) * Number(item.amount))
    ), 0);
    setTotalPrice(total.toFixed(2));
  }, [shoppingCart]);

  const handleClick = ({ target }) => {
    const element = target.parentNode.parentNode;
    const itemIndex = element.firstChild.innerHTML - 1;
    const newCart = shoppingCart.filter((_item, index) => index !== itemIndex);
    setShoppingCart(newCart);
  };

  const multiply = (price, amount) => {
    const result = price * amount;
    return result.toFixed(2).replace('.', ',');
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Sub-total</td>
          <td>Remover Item</td>
        </tr>
      </thead>
      <tbody>
        {
          shoppingCart.map((i, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {i.name}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {i.amount}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {i.price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {multiply(i.price, i.amount)}
              </td>
              <td>
                <button
                  type="button"
                  onClick={ handleClick }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
        <tr>
          <td
            data-testid="customer_checkout__element-order-total-price"
          >
            {`Total: R$ ${totalPrice.replace('.', ',')}`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
