import get from 'lodash/get';
Component({
  props: {
    isLoading: false,
  },
  data: {
    isCollapsedDesc: false,
    showCollapse:false,

  },
  didMount(){
    this.checkShowCollapse();
  },
  methods: {
    onToggleDesc() {
      const { isCollapsedDesc } = this.data;
      const nextValue = !isCollapsedDesc;
      this.setData({
        isCollapsedDesc: nextValue,
      });
    },
    checkShowCollapse(){
      my.createSelectorQuery()
      .select('#wrap_description')
      .boundingClientRect()
      .select('#description')
      .boundingClientRect()
      .exec((ret) => {
        const wrapHeight =  get(ret,[0,'height'],0);
        const descriptionHeight =  get(ret,[1,'height'],0);
        if(descriptionHeight>wrapHeight){
          this.setData({
            showCollapse:true,
          })
        }else{
          this.setData({
            showCollapse:false,
          })
        }
      });;
    }
  },

});
