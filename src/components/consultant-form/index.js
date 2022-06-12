import { serviceApis } from "../../services/apis";
Component({
	props:{
		className:'',
	},
  data: {
		isCollapsed:false,
	},
  methods: {
    async onSubmit(e) {
			serviceApis.postConsultantForm(e.detail.value);
    },
		handleCollapsed(){
			const {isCollapsed}= this.data;
			const negativeValue = !isCollapsed;
			console.log('isCollapsed',isCollapsed);
			this.setData({
				isCollapsed:negativeValue,
			});
		}
  },
});
