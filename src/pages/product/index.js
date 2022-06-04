import dummyData from './dummyData';

Page({
  data:{
    isLoading:false,
    skeletons: 6,
    products:{
      data: [],
      paging: {
        current_page: 0,
        last_page: 0,
      },
    }
  },
  async loadData(){
    const {products} = dummyData;
    this.setData({
      products:{
        ...this.data.products,
        data:products
      },
      // isLoading:false,
    });
  },
	onReady() {
    this.loadData();
    // this.setData({isLoading:true});
    // setTimeout(()=>{
    //   this.loadData();
    // },5000);
	},
});