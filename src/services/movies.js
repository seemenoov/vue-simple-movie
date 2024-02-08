import httpService from "./http.js";

class MoviesService {
  constructor() {
    this.$http = httpService;
  }

  async getMovies() {
    try {
      const data = await this.$http.get("/movie/popular");
      return data?.results;
    } catch (e) {
      console.log(e);
    }
  }
}

const movieService = new MoviesService();
export default movieService;
