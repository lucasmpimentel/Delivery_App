import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Seller from '../../services/seller.service';

export default function AdressForm({ delivery, setDelivery }) {
  const [sellersList, setSellersList] = useState(null);

  const getSellers = async () => {
    const sellers = await Seller.getAll();
    setSellersList(sellers);
  };

  useEffect(() => {
    if (!sellersList) {
      getSellers();
    }
  }, []);

  return (
    <form>
      <label htmlFor="seller">
        P. Vendedora Responsavel
        <select
          data-testid="customer_checkout__select-seller"
          id="seller"
          name="sellerId"
          onChange={ setDelivery }
        >
          {sellersList && sellersList?.map(({ id, name }) => (
            <option key={ id } value={ id }>{name}</option>))}
        </select>
      </label>
      <label htmlFor="street">
        Endereço:
        <input
          id="street"
          name="street"
          value={ delivery.street }
          onChange={ setDelivery }
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Número:
        <input
          id="number"
          name="number"
          value={ delivery.number }
          onChange={ setDelivery }
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
    </form>
  );
}

AdressForm.propTypes = {
  delivery: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
  ]).isRequired,
  setDelivery: PropTypes.func.isRequired,
};
