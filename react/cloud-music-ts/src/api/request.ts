import { axiosInstance } from './config'

export const getBannerRequest = () => {
  return axiosInstance.get ('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get ('/personalized');
}

export const getHotSingerListRequest = (count: number) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category: string, area: string, alpha: string, count: number) => {
  return axiosInstance.get(`/artist/list?type=${category}&area=${area}&initial=${alpha.toLowerCase()}&offset=${count}`);
}

export const getRankListRequest = () => {
  return axiosInstance.get (`/toplist/detail`);
};

export const getAlbumDetailRequest = (id: number) => {
  return axiosInstance.get (`/playlist/detail?id=${id}`);
};