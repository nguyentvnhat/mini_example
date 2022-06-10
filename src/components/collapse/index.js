Component({
  props: {
    isLoading: false,
  },
  data: {
    isCollapsedDesc: false,

  },
  methods: {
    onToggleDesc() {
      const { isCollapsedDesc } = this.data;
      const nextValue = !isCollapsedDesc;
      this.setData({
        isCollapsedDesc: nextValue,
      });
    },
  },
});
