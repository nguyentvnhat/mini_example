import parse from "@tiki.vn/mini-html-parser2";
import {decode} from'html-entities';
Component({
  props: {
    className:'',
    content: "",
  },
  data: {
    htmlNodes: [],
    htmlNodesText: "",
  },
  
  deriveDataFromProps(nextProps) {
    if (this.props.content !== nextProps.content) this.parseHTMLFromProps(nextProps.content);
  },
  didMount(){
    this.parseHTMLFromProps(this.props.content);
  },
  methods: {
    parseHTMLFromProps(content) {
      if(!content) return;
      parse(decode(content), (err, htmlNodes) => {
        if (!err) {
          this.setData({
            htmlNodes,
            htmlNodesText: JSON.stringify(htmlNodes, null, 2),
          });
        }
      });
    },
  },
});
