import { parseQuery } from "../../utils/navigate";
import dummyData from "./dummyData";
Page({
  data: {
    isLoading: false,
    service: {
      images: [],
      content: "",
    },
  },
  async loadData() {
    this.setData({
      service: dummyData.data,
      isLoading: false,
    });
  },
  onLoad(query) {
    this.setData({ isLoading: true });
    const { id } = parseQuery(query);
    setTimeout(()=>{
      this.loadData();
    },2000);
  },
});
