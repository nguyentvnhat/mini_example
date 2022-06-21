import { serviceApis } from "../../services/apis";
import get from 'lodash/get';
Component({
  props: {
    className: "",
  },
  data: {
    isCollapsed: false,
    full_name: "",
    phone_number: "",
    service_name: [],
    errors: {
      full_name: "",
      phone_number: "",
      service_name: [],
    },
    serviceOptions:[],
    isValid: false,
  },
  didMount(){
    this.loadOption();
  },
  methods: {
    async loadOption(){
      const res = await serviceApis.getConsultantOptions();
      this.setData({
        serviceOptions:get(res,'data.options',[]),
      })
    },
    _onSubmit() {
      const { full_name, phone_number, service_name } = this.data;
      const payload = { full_name, phone_number, service_name };
	  this.close();
	  this.props.onSubmit(payload);
    },
    onChangeName(e) {
      const errors = this.data.errors;
      const full_name = e.detail.value;
      if (!full_name) errors["full_name"] = "Vui lòng nhập họ tên";
      else delete errors["full_name"];
      this.setData({
        full_name,
        errors,
        isValid: Object.values(errors).length === 0,
      });
    },
    onChangePhoneNumber(e) {
      const errors = this.data.errors;
      const phone_number = e.detail.value;
      const phone_reg = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
      if (!phone_number) errors["phone_number"] = "Vui lòng nhập số điện thoại";
      else if (!phone_reg.test(phone_number))
        errors["phone_number"] = "Sai định dạng số điện thoại";
      else delete errors["phone_number"];

      this.setData({
        phone_number,
        errors,
        isValid: Object.values(errors).length === 0,
      });
    },
    onChangeCheckBox(e) {
      const errors = this.data.errors;
      const service_name = e.detail.value;
      if (!service_name || service_name.length === 0)
        errors["service_name"] = "Vui lòng chọn loại dịch vụ";
      else delete errors["service_name"];
      this.setData({
        service_name: e.detail.value,
        errors,
        isValid: Object.values(errors).length === 0,
      });
    },
    open() {
      this.setData({
        isCollapsed: true,
      });
    },
    close() {
      this.setData({
        isCollapsed: false,
      });
    },
    handleCollapsed() {
      const { isCollapsed } = this.data;
      const negativeValue = !isCollapsed;
      if (negativeValue) this.open();
      else this.close();
    },
  },
});
