import request from "../index";
import dummyData from "../../pages/service/dummyData";
export const getServiceSteps =async () => {
  const res = await request({
    path: "/get-service-steps",
  });
  return res;
}; 
