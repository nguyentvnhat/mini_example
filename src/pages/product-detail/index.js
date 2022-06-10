import { productApis } from "../../services/apis";
import parse from "@tiki.vn/mini-html-parser2";
import { parseQuery } from "../../utils/navigate";

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
    parse(product.description, (err, htmlNodes) => {
      if (!err) {
        this.setData({
          htmlNodes,
          htmlNodesText: JSON.stringify(htmlNodes, null, 2),
        });
      }
    });
    // this.animation.height(200).step();
    this.setData({
      product,
      isLoading: false,
      // animation: this.animation.export(),
    });
    // if(!descViewPointHeight){
    //   getHeightViewPointDesc('.description');
    // }
  },
  onReady() {
    // this.animation = my.createAnimation();
  },
  onShow(){
    // this.getViewPointDesc();
  },
  // onToggleDesc() {
  //   if(!descViewPointHeight){
  //     getHeightViewPointDesc('.description');
  //   }
  //   const { isCollapsedDesc } = this.data;
  //   const nextValue = !isCollapsedDesc;
  //   if (nextValue) {
  //     this.animation.height(descViewPointHeight ?descViewPointHeight: 'auto').step();
  //   } else {
  //     this.animation.height(200).step();
  //   }
  //   this.setData({
  //     isCollapsedDesc: nextValue,
  //     animation: this.animation.export(),
  //   });
  // },
});
