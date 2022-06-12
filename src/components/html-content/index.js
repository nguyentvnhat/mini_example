import parse from "@tiki.vn/mini-html-parser2";
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
    console.log(this.props.content !== nextProps.content);
    if (this.props.content !== nextProps.content) this.parseHTMLFromProps(nextProps.content);
  },
  didMount(){
    this.parseHTMLFromProps(this.props.content);
  },
  methods: {
    parseHTMLFromProps(content) {
      parse(content, (err, htmlNodes) => {
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
