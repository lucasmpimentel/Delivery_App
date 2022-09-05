import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import * as My from './style';

export default function ProductCard(
  { id, title, price, urlImage, add, remove, handleAmount, amount },
) {
  return (
    <My.CardContainer>
      <My.CardHead
        titleTypographyProps={
          { 'data-testid': `customer_products__element-card-title-${id}` }
        }
        title={ title }
      />
      <My.Image
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ String(urlImage) }
        title={ title }
        component="img"
      />
      <My.Content>
        <My.Div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            R$
            {' '}
            <span
              data-testid={ `customer_products__element-card-price-${id}` }
            >
              {price}
            </span>
          </Typography>
          <CardActions>
            <My.IconBtn
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              onClick={ () => remove(id) }
            >
              -
            </My.IconBtn>
            <My.Text
              inputProps={
                { 'data-testid': `customer_products__input-card-quantity-${id}` }
              }
              placeholder="0"
              value={ amount }
              onChange={ (e) => handleAmount(e, id) }
            />
            <My.IconBtn
              type="button"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ () => add(id) }
            >
              +
            </My.IconBtn>
          </CardActions>
        </My.Div>
      </My.Content>
    </My.CardContainer>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleAmount: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};
