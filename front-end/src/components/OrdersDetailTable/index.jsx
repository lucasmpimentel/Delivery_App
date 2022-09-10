import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import Context from '../../context/context';
import * as My from './style';

export default function TableDetails() {
  const { totalPrice, saleProducts } = useContext(Context);

  const multiply = (price, amount) => {
    const result = price * amount;
    return result.toFixed(2).replace('.', ',');
  };

  return (
    <My.Div>
      <My.OrderTable>
        <My.THead>
          <My.Tr>
            <My.Tdh>Item</My.Tdh>
            <My.Tdh>Descrição</My.Tdh>
            <My.Tdh>Quantidade</My.Tdh>
            <My.Tdh>Valor Unitário</My.Tdh>
            <My.Tdh>Sub-total</My.Tdh>
          </My.Tr>
        </My.THead>
        <My.TBody>
          {
            saleProducts && saleProducts?.map((i, index) => (
              <My.Tr key={ index }>
                <My.Td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  {i.name}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {i.amount}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {i.price.replace('.', ',')}
                </My.Td>
                <My.Td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {multiply(i.price, i.amount)}
                </My.Td>
              </My.Tr>
            ))
          }
        </My.TBody>
      </My.OrderTable>
      <My.Total
        data-testid="customer_order_details__element-order-total-price"
      >
        <Typography variant="button">
          {totalPrice && `Total: R$ ${totalPrice?.replace('.', ',')}`}
        </Typography>
      </My.Total>
    </My.Div>
  );
}
