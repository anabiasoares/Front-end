import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    shoppingCartItens: [],
  };

  componentDidMount() {
    const get = JSON.parse(localStorage.getItem('cart'));

    this.setState({
      shoppingCartItens: get,
    });
  }

  render() {
    const { shoppingCartItens } = this.state;

    return (
      <div>
        { shoppingCartItens === null
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : shoppingCartItens.map((p, i) => (
            <div key={ i }>
              <h3 data-testid="shopping-cart-product-name">{ p.name }</h3>
              <img src={ p.image } alt={ p.name } />
              <p>{ p.total }</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { p.quantity }

              </p>
              <button
                data-testid="product-increase-quantity"
                type="submit"
                onClick={ (event) => {
                  event.preventDefault();
                  const get = JSON.parse(localStorage.getItem('cart'));
                  const prod = get.find((product) => product.name === p.name);
                  const change = get.filter((product) => product.name !== p.name);
                  prod.quantity += 1;
                  change.push(prod);
                  this.setState({ shoppingCartItens: change }, () => {
                    localStorage.setItem('cart', JSON.stringify(change));
                  });
                } }
              >
                +

              </button>
              <button
                data-testid="product-decrease-quantity"
                type="submit"
                onClick={ (event) => {
                  event.preventDefault();
                  const get = JSON.parse(localStorage.getItem('cart'));
                  const prod = get.find((product) => product.name === p.name);
                  const change = get.filter((product) => product.name !== p.name);
                  prod.quantity -= 1;
                  change.push(prod);
                  this.setState({ shoppingCartItens: change }, () => {
                    localStorage.setItem('cart', JSON.stringify(change));
                  });
                } }
              >
                -

              </button>
              <button
                data-testid="remove-product"
                type="submit"
                onClick={ (event) => {
                  event.preventDefault();
                  const get = JSON.parse(localStorage.getItem('cart'));
                  const change = get.filter((product) => product.name !== p.name);
                  this.setState({ shoppingCartItens: change }, () => {
                    localStorage.setItem('cart', JSON.stringify(change));
                  });
                } }
              >
                Remover

              </button>
            </div>
          )) }
      </div>
    );
  }
}

export default ShoppingCart;
