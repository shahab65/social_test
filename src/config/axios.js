import axios from "axios";
import History from "./history";

const instance = axios.create({
  baseURL: "https://base.url/",
  timeout: 60000
});

instance.interceptors.request.use(request => {
  let token = localStorage.getItem("token");
  if (token) request.headers["Authorization"] = "Bearer " + token;
  return request;
});

instance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      axios
        .post("https://base.url/auth/refresh", {
          refresh_token: localStorage.getItem("refresh_token")
        })
        .then(res => {
          let { access_token: token, refresh_token } = res.data.data;
          localStorage.setItem("token", token);
          localStorage.setItem("refresh_token", refresh_token);
          instance.defaults.headers.common["Authorization"] = "Bearer " + token;
          return instance(originalRequest);
        })
        .catch(() => {
          console.log("refresh token failed!!!");
          History.navigate("/logout");
        });
    } else return Promise.reject(error);
  }
);

export default instance;
