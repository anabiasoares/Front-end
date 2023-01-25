import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Products from './Products';

class ProductDetails extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const requisition = await api.getProductById(id);
    this.setState({ product: requisition });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/cart');
  };

  render() {
    const { product } = this.state;

    return (
      <div>
        <Products p={ product } dtest="product-detail-add-to-cart" />
        <button
          data-testid="shopping-cart-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Carrinho de compras

        </button>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}.isRequired;
