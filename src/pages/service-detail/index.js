import { parseQuery } from "../../utils/navigate";
import { serviceApis } from "../../services/apis";
import {getContent} from '../../utils/common';
Page({
  data: {
    isLoading: false,
    service: {
      images: [],
      content: "",
      title: "",
    },
  },
  async loadData(id) {
    const [serviceData, images] = await serviceApis.getDetailService(id);
    if (serviceData && images) {
      this.setData({
        service: {
          content: serviceData.content.rendered
            ? getContent(serviceData.content.rendered)
            : "",
          images: images.map((i) => ({ src: i })),
          title: serviceData.title.rendered,
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
  async onSubmit(payload) {
    this.form.close();
    my.showLoading({ content: "", delay: 1000 });
    const res = await serviceApis.postConsultantForm(payload);
    if (res.success) {
      my.showToast({
        type: "success",
        content: "Gửi thành công",
      });
    } else {
      my.showToast({
        type: "fail",
        content: "Gửi thất bại",
      });
    }
    my.hideLoading();
  },
});
