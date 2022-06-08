import { productApis } from "../../services/apis";
import {navigate} from '../../utils/navigate';
import { defaultSorts } from '../../utils/constant';
Page({
  data: {
    isLoading: false,
    skeletons: 6,
    products: {
      data: [],
      defaultData: [],
      paging: {
        current_page: 0,
        last_page: 0,
      },
    },
    sorts: defaultSorts,
    selectedSort: '',
  },
  async loadData() {
    this.setData({ isLoading: true });
    const resProducts = await productApis.getProductsArchives();
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
    if (textSearch) {
      const data = await productApis.getSearchProducts(textSearch);
      this.setData({
        products: {
          ...this.data.products,
          data,
        },
        isLoading: false,
      });
    } else {
      this.setData({
        products: {
          ...this.data.products,
          data:this.data.products.defaultData,
        },
        isLoading: false,
      });
    }
  },
  onTapProduct(productId){
    navigate({
      page: 'product-detail',
      params: {
        id:productId,
      },
    });
  },
  onSelectSort(selectedSort) {
    this.setData({
      selectedSort,
    });
  },
});
