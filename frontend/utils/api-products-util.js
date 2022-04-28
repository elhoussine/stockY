export const fetchProducts = () => (
  $.ajax({
    method: 'GET',
    url: `/api/products`
  })
);

export const fetchProduct = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${id}`
  })
);

export const createProduct = (product) => {
  console.log(product);
  return $.ajax({
    method: 'POST',
    url: '/api/products',
    data: product,
    contentType: false,
    processData: false
  })
};

export const updateProduct = (product) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/products/${product.id}`,
    data: product,
    contentType: false,
    processData: false
  })
);

export const deleteProduct = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/products/${id}`
  })
);