import request from "../index";

export const getSlideArchives = async () => {
  const res = await request({
    path: "/get-slide-archives",
  });
  return res;
};

export const getIntroApp = async () => {
  const res = await request({
    path: "/pages?slug=gioi-thieu-tiniapp",
  });
  return res;
};
