import React, { useState, useEffect } from 'react';

export default function CheckoutTable() {
  const [mockCart, setMockCart] = useState([
    {
      itemName: 'cerveja quente',
      amount: 6,
      itemValue: 0.5,
      itemTotal: 3,
    },
    {
      itemName: 'cerveja ruim',
      amount: 6,
      itemValue: 1,
      itemTotal: 6,
    },
  ]);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    const total = mockCart.reduce((acc, item) => acc + item.itemTotal, 0);
    console.log(total);
    setTotalValue(total);
  }, [mockCart]);

  const handleClick = ({ target }) => {
    const element = target.parentNode.parentNode;
    const itemIndex = element.firstChild.innerHTML - 1;
    const newCart = mockCart.filter((_item, index) => index !== itemIndex);
    setMockCart(newCart);
  };

  return (
    <table>
      <thead>
        <td>Item</td>
        <td>Descrição</td>
        <td>Quantidade</td>
        <td>Valor Unitário</td>
        <td>Sub-total</td>
        <td>Remover Item</td>
      </thead>
      <tbody>
        {
          mockCart.map((i, index) => (
            <tr key={ index }>
              <td>{index + 1}</td>
              <td>{i.itemName}</td>
              <td>{i.amount}</td>
              <td>{i.itemValue.toFixed(2)}</td>
              <td>{i.itemTotal.toFixed(2)}</td>
              <td>
                <button type="button" onClick={ handleClick }>
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
        <tr>
          <td>{`Total: R$ ${totalValue}`}</td>
        </tr>
      </tbody>
    </table>
  );
}
