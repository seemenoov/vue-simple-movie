import axios from "axios";

class HttpService {
  constructor() {
    this._axios = axios.create({
      baseURL: `https://api.themoviedb.org/3`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM1OWNiMjA4M2UyOGU5NzQwNzA2Y2ZjN2ZlYzFhNSIsInN1YiI6IjY1YzI5YWY1OTVhY2YwMDE4MzFiNzU3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0n6_0GLa77Tch8O2uqUIKBlMq749nW7D5evdYP3mIpw`,
      },
    });

    this._axios.interceptors.request.use((config) => {
      return config;
    });

    this._axios.interceptors.response.use(
      (response) => {
        return response.status === 200 ? response.data : response;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get(url, config) {
    return await this._axios.get(url, config);
  }

  async post(url, data, config) {
    return await this._axios.post(url, data, config);
  }
}

const httpService = new HttpService();
export default httpService;
