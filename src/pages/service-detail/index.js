import {parseQuery} from '../../utils/navigate';
Page({
  data: {
    name: "",
  },
  onLoad(query) {
    const { id, name } = parseQuery(query);
    this.setData({
      name,
    });
  },
});
