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

export const postConsultantForm = async (payload) => {
  const data = new FormData();
  const res = await request({
    path: "/post-consultant-form-of-service",
    method: "POST",
    data:payload,
  });
  return res;
};