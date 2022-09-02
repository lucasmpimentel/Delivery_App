import React from 'react';
import PropTypes from 'prop-types';

export default function MyOrderCart(
  { id, status, data, totalPrice },
) {
  return (
    <div>
      <div>
        <h3 data-testid={ `customer_products__element-order-date-${id}` }>
          Pedido
          {id}
        </h3>
      </div>
      <div>
        <h3>
          {status}
        </h3>
      </div>
      <div>
        <h4>
          {data.slice(2, 10).split('-').reverse().join('-')}
          {/* var dateParts = isoFormatDateString.split("-");
          var jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2)); */}
        </h4>
        <div>
          <h4>
            {totalPrice}
          </h4>
        </div>
      </div>
    </div>
  );
}

MyOrderCart.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
