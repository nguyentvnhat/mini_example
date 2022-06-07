import request from "../index";

export const getProductsArchives = async () => {
  const res = await request({
    path: "/get-products-archives",
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
