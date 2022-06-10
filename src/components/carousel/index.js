Component({
  props: {
    isLoading: false,
    list: [],
  },
  data: {
    current: 0,
  },
  methods: {
    onChange(e) {
      this.setData({
        current: e.detail.current,
      });
    },
  },
});
