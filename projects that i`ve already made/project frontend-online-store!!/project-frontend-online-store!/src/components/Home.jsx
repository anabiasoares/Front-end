import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Category from './Category';
import Products from './Products';
import * as api from '../services/api';

class Home extends Component {
  state = {
    valueInput: '',
    products: [],
    message: '',
  };

  handleInput = ({ target }) => {
    this.setState({
      valueInput: target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { valueInput } = this.state;
    const requisition = await api.getProductsQuery(valueInput);

    this.setState({
      products: requisition.results,
      message: requisition.results.length === 0,
    });
  };

  render() {
    const { valueInput, products, message } = this.state;

    return (
      <>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          onChange={ this.handleInput }
          value={ valueInput }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.handleSubmit }
        >
          Pesquisar

        </button>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </p>
        { message ? <p>Nenhum produto foi encontrado</p> : '' }
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho de compras</Link>
        <Category />
        {
          products.map((p, i) => (
            <div key={ i }>
              <Products p={ p } dtest="product-add-to-cart" />
            </div>
          ))
        }
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  history: PropTypes.object,
}.isRequired;
