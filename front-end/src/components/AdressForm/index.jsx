import React from 'react';
import PropTypes from 'prop-types';

export default function AdressForm({ delivery, setDelivery }) {
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
          <option value="1">1</option>
          <option value="2">2</option>
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
