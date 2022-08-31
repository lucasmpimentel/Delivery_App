import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function ProductCard(
  { id, name, price, urlImage, add, remove, handleAmount, amount },
) {
  return (
    <div className="card">
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        className="img"
      />
      <div>
        <h3
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </h3>
        <div>
          <h4>
            R$
            {' '}
            <span
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              {price}
            </span>
          </h4>
          <div>
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              name={ id }
              onClick={ remove }
            >
              -
            </button>
            <input
              type="number"
              data-testid={ `customer_products__input-card-quantity-${id}` }
              placeholder="0"
              min="0"
              name={ id }
              value={ amount }
              onChange={ handleAmount }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              name={ id }
              onClick={ add }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleAmount: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};
