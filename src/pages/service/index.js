import { navigate } from "../../utils/navigate";
import { serviceApis } from "../../services/apis";
Page({
  data: {
    isLoading: true,
    skeletons: 5,
    services: {
      data: [],
    },
  },
  mappingServiceData(data){
    if(!data) return [];
    return data.map(service=>({
      id: service.ID,
      image: service.feature_image,
      name: service.post_title,
      desc:service.post_content,
    }))
  },
  async loadData() {
    const res = await serviceApis.getServiceArchives();
    if (res.success) {
      this.setData({
        services: {
          data: this.mappingServiceData(res.data),
        },
        isLoading: false,
      });
    } else {
      this.setData({
        isLoading: false,
      });
    }
  },
  onReady() {
    this.setData({ isLoading: true });
    this.loadData();
  },
  onTabService(service) {
    navigate({
      page: "service-detail",
      params: {
        id: service.id,
        name: service.name,
      },
    });
  },
});
