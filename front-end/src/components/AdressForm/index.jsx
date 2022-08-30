import React from 'react';
import PropTypes from 'prop-types';

export default function AdressForm({ adress, setAdress }) {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAdress({ ...adress, [name]: value });
  };

  return (
    <form>
      <label htmlFor="seller">
        P. Vendedora Responsavel
        <select
          data-testid="customer_checkout__select-seller"
          id="seller"
        >
          <option>1</option>
        </select>
      </label>
      <label htmlFor="street">
        Endereço:
        <input
          id="street"
          name="street"
          value={ adress.street }
          onChange={ handleChange }
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Número:
        <input
          id="number"
          name="number"
          value={ adress.number }
          onChange={ handleChange }
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
    </form>
  );
}

AdressForm.propTypes = {
  adress: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setAdress: PropTypes.func.isRequired,
};
