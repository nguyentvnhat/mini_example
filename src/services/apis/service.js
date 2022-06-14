import request from "../index";
import dummyData from "../../pages/service/dummyData";
export const getServiceArchives = async () => {
  const res = await request({
    path: "/get-service-archives",
  });
  return res;
};

export const getDetailService = (id) => {
  return Promise.all([
    request({
      path: "/posts/" + id,
    }),
    request({
      path: "/get-images-post/" + id,
    }),
  ]);
};

export const postConsultantForm = async ({
  full_name,
  phone_number,
  service_name,
}) => {
  const data = new FormData();
  data.append("full_name", full_name);
  data.append("phone_number", phone_number);
  data.append("service_name", service_name);
  const res = await request({
    path: "/post-consultant-form-of-service",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
    data,
  });
  return res;
};
