import axios, { AxiosRequestConfig } from "axios";

const requestHandler = (request: AxiosRequestConfig) => {
  // Modify request here
  return request;
};

const instance = axios.create({
  timeout: 6000,
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3030",
});

instance.interceptors.request.use((request) => requestHandler(request));
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    return err;
  }
);

export default instance;
