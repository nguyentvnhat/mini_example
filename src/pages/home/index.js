import { homeApis } from "../../services/apis";
import { decode } from "html-entities";
import get from "lodash/get";
import { getContent } from "../../utils/common";
import { navigate } from "../../utils/navigate";
Page({
  data: {
    sliders: [],
    content: null,
    isLoadingContent: false,
    isLoadingCarousel: false,
  },
  mappingSlidersData(data) {
    if (!data) return [];
    return data.map((slider) => ({
      id: slider.ID,
      image: slider.feature_image,
      name: decode(slider.post_title),
      desc: decode(slider.post_content),
    }));
  },
  async loadIntro() {
    try {
      const res = await homeApis
        .getIntroApp()
        .finally(() => this.setData({ isLoadingContent: false }));
      if (res) {
        const content = get(res, [0, "content", "rendered"], null);
        this.setData({
          content: content ? getContent(content) : null,
        });
      }
    } catch (error) {}
  },
  async loadData() {
    try {
      const res = await homeApis
        .getSlideArchives()
        .finally(() => this.setData({ isLoadingCarousel: false }));
      if (res.success) {
        this.setData({
          sliders: this.mappingSlidersData(res.data),
        });
      }
    } catch (error) {}
  },
  async onReady() {
    this.setData({ isLoadingContent: true, isLoadingCarousel: true });
    this.loadData();
    this.loadIntro();
  },
  onTabService(service) {
    navigate({
      page: "home-banner-detail",
      params: {
        id: service.id,
        name: service.name,
      },
    });
  },
});
