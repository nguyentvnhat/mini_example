import { parseQuery } from "../../utils/navigate";
import dummyData from "./dummyData";
import { serviceApis } from "../../services/apis";
Page({
  data: {
    isLoading: false,
    service: {
      images: [],
      content: "",
    },
  },
  async loadData(id) {
    const [serviceData, images] = await serviceApis.getDetailService(id);
    if (serviceData && images) {
      this.setData({
        service: {
          content: serviceData.content.rendered?serviceData.content.rendered.replace(/<\/?[^>]+(>|$)/g,''):'',
          images: images.map((i) => ({ src: i })),
        },
        isLoading: false,
      });
      return;
    }
    this.setData({
      isLoading: false,
    });
  },
  saveRef(ref) {
    this.form = ref;
  },
  onLoad(query) {
    this.setData({ isLoading: true });
    const { id } = parseQuery(query);
    this.loadData(id);
  },
  onTapOutSiteForm() {
    this.form.close();
  },
});
