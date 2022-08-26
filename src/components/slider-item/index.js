Component({
  props: {
    className: "",
    isLoading: false,
    item: {
      id: "",
      image: "",
      name: "",
      desc:"",
    },
  },
	methods:{
		_onTapService(){
			this.props.onTap(this.props.item);
		}
	}
});
