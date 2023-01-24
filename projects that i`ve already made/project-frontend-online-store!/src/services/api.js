export async function getCategories() {
  const api = 'https://api.mercadolibre.com/sites/MLB/categories';
  const chamaApi = await fetch(api);
  const data = await chamaApi.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const api = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const chamaApi = await fetch(api);
  const data = await chamaApi.json();
  return data;
}
// function criada
export async function getFromCategorie(categoryId) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const api = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const chamaApi = await fetch(api);
  const data = await chamaApi.json();
  return data;
}

export async function getProductsQuery(query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const chamaApi = await fetch(api);
  const data = await chamaApi.json();
  return data;
}

export async function getProductById(id) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const api = `https://api.mercadolibre.com/items/${id}`;
  const chamaApi = await fetch(api);
  const data = await chamaApi.json();
  return data;
}
