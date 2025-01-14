import axios from "axios";

const mainUrl = axios.create({
    baseURL: "https://dummyjson.com"
})

mainUrl.interceptors.request.use((req) => {
    let token = localStorage.getItem("token")
    if (token) {
      // authorization va Bearer - o'zgarishi mumkin backendchidan so'raladi
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
});
  

export default mainUrl