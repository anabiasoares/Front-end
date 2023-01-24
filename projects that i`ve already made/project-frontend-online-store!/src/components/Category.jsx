import React, { Component } from 'react';
import * as api from '../services/api';
import Products from './Products';

class Category extends Component {
  state = {
    listCategorie: [],
    categorys: [],
  };

  async componentDidMount() {
    const categorie = await api.getCategories();
    this.setState({
      categorys: categorie,
    });
  }

  handleRadioClick = async ({ target }) => {
    const apiCategorie = await api.getFromCategorie(target.id);
    this.setState({ listCategorie: apiCategorie.results });
  };

  render() {
    const { categorys, listCategorie } = this.state;
    // const { handleClick } = this.props

    return (
      <div>
        {
          categorys
            .map((c) => (
              <label data-testid="category" key={ c.id } htmlFor={ c.id }>
                <input
                  type="radio"
                  name="category"
                  id={ c.id }
                  onClick={ this.handleRadioClick }
                />
                { c.name }
              </label>))
        }
        {
          listCategorie.map((p, i) => (
            <div key={ i }>
              <Products p={ p } dtest="product-add-to-cart" />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Category;
