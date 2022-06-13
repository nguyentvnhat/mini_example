import request from "../index";
export const getProductsArchives = async ({
  search = null,
  order = null,
  orderby = null,
  page = 1,
}) => {
  const params = {
    page,
  };
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

export const getListSimilarWithProductId = async (product_id) => {
  const res = await request({
    path: "/get-products-similar/" + product_id,
  });
  return res;
};
