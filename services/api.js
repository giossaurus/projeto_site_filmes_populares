import { apiKey } from "../environment/key.js"

async function searchMovieByName(title) {
  const url = `https://api.themoviedb.org/3/movie/550?api_key=43b2ca0804dc1c18a7ec55867bd48014`
  const fetchResponse = await fetch(url)
  const { results } = await fetchResponse.json()
  return results
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/550?api_key=43b2ca0804dc1c18a7ec55867bd48014`
  const fetchResponse = await fetch(url)
  const { results } = await fetchResponse.json()
  return results
} 

export const API = {
  searchMovieByName,
  getPopularMovies
}