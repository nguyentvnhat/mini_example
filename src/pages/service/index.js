import dummyData from "./dummyData";
import {navigate} from '../../utils/navigate';
Page({
  data: {
    isLoading: true,
    skeletons: 5,
    services: {
      data: [],
    },
  },
  async loadData() {
    const { services } = dummyData;
    this.setData({
      services: {
        data: services.data,
      },
      isLoading: false,
    });
  },
  onReady() {
    this.setData({ isLoading: true });
    setTimeout(() => {
      this.loadData();
    }, 5000);
  },
  onTabService(service){
    navigate({
      page: 'service-detail',
      params: {
        id:service.id,
        name:service.name,
      },
    });
  }
});
