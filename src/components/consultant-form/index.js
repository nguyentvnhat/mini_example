import { serviceApis } from "../../services/apis";
Component({
	props:{
		className:''
	},
  data: {
		isCollapsed:false,
	},
  methods: {
    async onSubmit(e) {
			serviceApis.postConsultantForm(e.detail.value);
    },
    open(){
      this.setData({
				isCollapsed:true,
			});
    },
    close(){
      this.setData({
				isCollapsed:false,
			});
    },
		handleCollapsed(){
			const {isCollapsed}= this.data;
			const negativeValue = !isCollapsed;
			if(negativeValue) this.open();
      else this.close();
		}
  },
});
