import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { p, dtest } = this.props;

    return (
      <div
        data-testid="product"
      >
        <p data-testid="product-detail-name">
          { p.title }
        </p>
        <img data-testid="product-detail-image" src={ p.thumbnail } alt={ p.title } />
        <p data-testid="product-detail-price">
          { `Preço R$:${p.price}` }
        </p>
        <Link
          data-testid="product-detail-link"
          to={ `/details/${p.id}` }
        >
          Detalhes

        </Link>
        <br />
        <br />
        <button
          data-testid={ dtest }
          type="submit"
          onClick={ () => {
            const get = JSON.parse(localStorage.getItem('cart'));
            const obj = { name: p.title,
              image: p.thumbnail,
              total: p.price,
              quantity: 1 };
            console.log(get);

            if (get === null) {
              return localStorage.setItem('cart', JSON.stringify([obj]));
            }
            get.push(obj);
            return localStorage.setItem('cart', JSON.stringify(get));
          } }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default Products;

Products.propTypes = {
  p: PropTypes.object,
}.isRequired;
