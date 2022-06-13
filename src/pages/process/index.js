import { processApis } from "../../services/apis";
Page({
  data: {
    process: {
      title_page: "",
      // url
      thumbnail_page: "",
      steps: [
        {
          step_desc_progress_tiniapp: "",
          step_name_progress_tiniapp: "",
        },
      ],
    },
    isLoading: false,
  },
  async loadData() {
    const res = await processApis.getServiceSteps();
    if (res && res.success) {
      const data = res.data;
      my.setNavigationBar({
        title:data.title_page
      });
      this.setData({
        process: {
          title_page: data.title_page,
          thumbnail_page: data.thumbnail_page.url,
          steps: data.steps,
        },
        isLoading: false,
      });
    } else {
      this.setData({ isLoading: false });
    }
  },
  onReady() {
    this.setData({ isLoading: true });
    this.loadData();
  },
});
