Component({
  props: {
    className: "",
    isLoading: false,
    service: {
      id: "",
      image: "",
      name: "",
    },
  },
	methods:{
		_onTapService(){
			this.props.onTap(this.props.service);
		}
	}
});
