import httpService from "./http.js";

class MoviesService {
  constructor() {
    this.$http = httpService;
  }

  async getMovies(type, films) {
    try {
      const data = await this.$http.get(`/${type}/${films}`);
      return data?.results;
    } catch (e) {
      console.log(e);
    }
  }
}

const movieService = new MoviesService();
export default movieService;
