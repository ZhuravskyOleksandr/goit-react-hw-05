import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const API_KEY = '5d636c167d1911dc85db1b0257cf393d';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDYzNmMxNjdkMTkxMWRjODVkYjFiMDI1N2NmMzkzZCIsInN1YiI6IjY2MGIxMDY1MWZkMzZmMDE0OTk5NWRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.15J7tuZ2BiwvelUaV9HjU5iPmOWjLau7pTLWSFIPdd8';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
};

async function getTrendingMovies() {
  const response = await axios('/trending/movie/day?language=en-US', options);
  return response.data.results;
}

async function getMovieDetails(id) {
  const response = await axios(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function getMovieCast(id) {
  const response = await axios(`/movie/${id}/credits`, options);
  return response.data.cast;
}

async function getMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews`, options);
  return response.data.results;
}

async function getMoviesByName(name) {
  const response = await axios('/search/movie', {
    params: {
      query: name,
    },
    ...options,
  });
  return response.data.results;
}

export {
  getTrendingMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMoviesByName,
};
