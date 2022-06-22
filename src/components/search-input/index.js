import debounce from 'lodash/debounce';
Component({
	data:{
		value:'',
	},
	props:{
		className:'',
		placeholder:'',
	},
  methods: {
    onInput(event) {
			this.setData({
				value:event.detail.value,
			});
			this._onChangeSearchInput(event);
    },
		_onChangeSearchInput: debounce(function (event) {
      this.props.onDebounce(event.detail.value);
    }, 500),
		handleClearInput(){
			this.onInput({detail:{value:''}});
		}
  },
});
