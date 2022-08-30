import React, { useState, useEffect, useContext } from 'react';
import context from '../../context/context';

export default function CheckoutTable() {
  const { shoppingCart } = useContext(context);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    const total = shoppingCart.reduce((acc, item) => acc + item.itemTotal, 0);
    console.log(total);
    setTotalValue(total);
  }, [shoppingCart]);

  const handleClick = ({ target }) => {
    const element = target.parentNode.parentNode;
    const itemIndex = element.firstChild.innerHTML - 1;
    const newCart = mockCart.filter((_item, index) => index !== itemIndex);
    setMockCart(newCart);
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
                  `customer_checkout__element-order-table-item-number-${index + 1}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${i.itemName}`
                }
              >
                {i.itemName}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${i.amount}`
                }
              >
                {i.amount}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-
                  ${i.itemValue.toFixed(2)}
                  `
                }
              >
                {i.itemValue.toFixed(2)}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-
                  ${i.itemTotal.toFixed(2)}
                  `
                }
              >
                {i.itemTotal.toFixed(2)}
              </td>
              <td>
                <button
                  type="button"
                  onClick={ handleClick }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index + 1}`
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
            {`Total: R$ ${totalValue}`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
