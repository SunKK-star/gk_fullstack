import axios from 'axios'

export const baseUrl = 'http://localhost:3001'
const axiosInstance = axios.create ({
  baseURL: baseUrl
});


// 添加响应拦截器
axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
    
  }
);

export {
  axiosInstance
};