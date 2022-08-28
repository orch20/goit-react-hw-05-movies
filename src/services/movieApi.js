const APIKEY = 'a862388c03cb8401487df36e94a12066';
const URL = `https://api.themoviedb.org/3`;

//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

export const getPopularMovies = async () => {
  return await fetch(
    `${URL}/trending/movie/week?api_key=${APIKEY}&include_adult=false`
  ).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};

export const getMovieById = async id => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&include_adult=false`
  ).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};

export const getMovieCast = async id => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&include_adult=false`
  ).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const getMovieByQuery = async name => {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}&include_adult=false`
  ).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};

export const getReviews = async id => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&include_adult=false`
  ).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};
