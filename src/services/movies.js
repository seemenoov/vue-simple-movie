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

  async getDetails(id) {
    try {
      const data = await this.$http.get(`/movie/${id}`);
      const credits = await this.$http.get(`/movie/${id}/credits`);
      return { ...data, ...credits };
    } catch (e) {
      console.log(e);
    }
  }
}

const movieService = new MoviesService();
export default movieService;
