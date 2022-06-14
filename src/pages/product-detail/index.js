import { productApis } from "../../services/apis";
import parse from "@tiki.vn/mini-html-parser2";
import { parseQuery } from "../../utils/navigate";
import { navigate } from "../../utils/navigate";

Page({
  data: {
    isLoading: false,
    product: {
      images: [],
      name: "",
      price: 0,
      description: "",
      related_ids: [1233, 1231, 4545, 6653],
    },
    listSimilar: [],
    htmlNodes: [],
    htmlNodesText: "",
    isCollapsedDesc: false,
  },

  async onLoad(query) {
    const { id } = parseQuery(query);
    this.setData({
      isLoading: true,
    });
    const product = await productApis.getProductDetail(id);
    const listSimilar = await productApis.getListSimilarWithProductId(id);
    parse(product.description, (err, htmlNodes) => {
      if (!err) {
        this.setData({
          htmlNodes,
          htmlNodesText: JSON.stringify(htmlNodes, null, 2),
        });
      }
    });
    this.setData({
      product,
      listSimilar,
      isLoading: false,
    });
  },
  onTapProduct(productId) {
    navigate({
      page: "product-detail",
      params: {
        id: productId,
      },
    });
  },
});
