import request from "../index";
// https://gaspa.vn/wp-json/wp/v2/get-products-archives?page=1&search=Eucerin - Kem Trị Dị Ứng Dưỡng&order=desc&orderby=popularity
export const getProductsArchives = async ({
  search = null,
  order = null,
  orderby = null,
}) => {
  const params = {};
  if (search) {
    params["search"] = search;
  }
  if (order) {
    params["order"] = order;
  }
  if (orderby) {
    params["orderby"] = orderby;
  }
  const res = await request({
    path: "/get-products-archives",
    params,
  });
  return res;
};

export const getSearchProducts = async (search_name) => {
  const res = await request({
    path: "/get-search-products",
    params: {
      search_name,
    },
  });
  return res;
};

export const getProductDetail = async (product_id) => {
  const res = await request({
    path: "/get-products-single",
    params: {
      product_id,
    },
  });
  return res;
};
