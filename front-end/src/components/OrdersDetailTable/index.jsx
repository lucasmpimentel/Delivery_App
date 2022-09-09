import React, { useContext } from 'react';
import Context from '../../context/context';

export default function TableDetails() {
  const { totalPrice, saleProducts } = useContext(Context);

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
        </tr>
      </thead>
      <tbody>
        {
          saleProducts && saleProducts?.map((i, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                {i.name}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {i.amount}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index}`
                }
              >
                {i.price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {multiply(i.price, i.amount)}
              </td>
            </tr>
          ))
        }
        <tr>
          <td
            data-testid="customer_order_details__element-order-total-price"
          >
            {totalPrice && `Total: R$ ${totalPrice?.replace('.', ',')}`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
