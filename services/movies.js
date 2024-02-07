import httpService from "./http.js";

class MoviesService {
  constructor() {
    this.$http = httpService;
    this.company = null;
  }

  async getMovies() {
    try {
      const data = await this.$http.get("/movie/popular");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}

const movieService = new MoviesService();
export default userService;
