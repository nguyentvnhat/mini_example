import { productApis } from "../../services/apis";
import { navigate } from "../../utils/navigate";
import { defaultSorts } from "../../utils/constant";
import debounce from "lodash/debounce";

const ItemPerPage = 10;
Page({
  data: {
    isLoading: false,
    skeletons: 6,
    products: {
      data: [],
      defaultData: [],
      page: 1,
    },
    textSearch: "",
    sorts: defaultSorts,
    selectedSort:  {
      label: '',
      value: '',
    },
  },
  async loadData() {
    this.setData({ isLoading: true });
    const { products } = this.data;
    const resProducts = await productApis.getProductsArchives({
      page: products.page,
    });
    this.hasMore = resProducts.length >= ItemPerPage;
    this.setData({
      products: {
        ...this.data.products,
        data: resProducts,
        defaultData: resProducts,
      },
      isLoading: false,
    });
  },
  onReady() {
    this.loadData();
  },
  async onSearch(textSearch) {
    this.setData({ isLoading: true });
    const { products,selectedSort } = this.data;
    if (textSearch) {
      let orderby = selectedSort.value;
      let order = "desc";
      if (selectedSort.value.includes("price")) {
        order = selectedSort.value.split("/")[1];
        orderby = "price";
      }
      const data = await productApis.getProductsArchives({
        order,
        orderby,
        search: textSearch,
        page: 1,
      });
      this.setData({
        products: {
          ...products,
          data,
          page: 1,
        },
        isLoading: false,
        textSearch,
      });
    } else {
      this.setData({
        products: {
          ...products,
          data: products.defaultData,
        },
        isLoading: false,
      });
    }
  },
  onTapProduct(productId) {
    navigate({
      page: "product-detail",
      params: {
        id: productId,
      },
    });
  },
  async onSelectSort(selectedSort) {
    const sortValue = selectedSort.value;
    let orderby = sortValue;
    let order = "desc";
    if (sortValue.includes("price")) {
      order = sortValue.split("/")[1];
      orderby = "price";
    }
    const { textSearch, products } = this.data;
    const data = await productApis.getProductsArchives({
      search: textSearch,
      order,
      orderby,
      page: 1,
    });
    this.setData({
      products: {
        ...products,
        data,
        page: 1,
      },
      isLoading: false,
      selectedSort,
    });
  },
  loadMoreProducts: debounce(async function () {
    const { textSearch, products, isLoading, selectedSort } = this.data;
    if (!this.hasMore) return;
    const nextPage = products.page + 1;
    let orderby = selectedSort.value;
    let order = "desc";
    if (selectedSort.value.includes("price")) {
      order = selectedSort.value.split("/")[1];
      orderby = "price";
    }
    const data = await productApis.getProductsArchives({
      search: textSearch,
      order,
      orderby,
      page: nextPage,
    });
    this.hasMore = data.length >= ItemPerPage;

    this.setData({
      products: {
        ...products,
        data: [...products.data, ...data],
        page: nextPage,
      },
    });
  }, 500),

  onPageScroll(event) {
    const { scrollHeight, scrollTop } = event;
    if (scrollTop >= scrollHeight * 0.55) this.loadMoreProducts();
  },
});
