Component({
  props: {
    isLoading:false,
    className: "",
    product: {
      description: "",
      feature_image: "",
      id: null,
      name: "",
      price: 0,
      variations: [],
    },
  },
  methods:{
    _onTapProduct(){
      const {id} = this.props.product;
      this.props.onTap(id);
    }
  }
});
