import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Seller from '../../services/seller.service';
import Input from '../shared/Input';
import * as My from './style';

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
    <My.Form>
      <My.Label htmlFor="seller">P. Vendedora Responsavel</My.Label>
      { sellersList && (
        <My.Seller
          // SelectDisplayProps={ { 'data-testid': 'customer_checkout__select-seller' } }
          required
          variant="outlined"
          id="seller"
          name="sellerId"
          defaultValue={ sellersList[0].id }
          onChange={ setDelivery }
          inputProps={
            { 'data-testid': 'customer_checkout__select-seller' }
          }
        >
          {sellersList && sellersList?.map(({ id, name }) => (
            <option key={ id } value={ id }>{name}</option>))}
        </My.Seller>)}
      <Input
        label="Endereço"
        variant="standard"
        id="street"
        name="street"
        value={ delivery.street }
        onChange={ setDelivery }
        InputLabelProps={ { style: { overflow: 'hidden' } } }
        inputProps={
          { 'data-testid': 'customer_checkout__input-address' }
        }
      />
      <Input
        label="Número"
        variant="standard"
        id="number"
        name="number"
        value={ delivery.number }
        onChange={ setDelivery }
        // data-testid="customer_checkout__input-addressNumber"
        InputLabelProps={ { style: { overflow: 'hidden' } } }
        inputProps={
          { 'data-testid': 'customer_checkout__input-addressNumber' }
        }
      />
    </My.Form>
  );
}

AdressForm.propTypes = {
  delivery: PropTypes.object.isRequired,
  setDelivery: PropTypes.func.isRequired,
};
