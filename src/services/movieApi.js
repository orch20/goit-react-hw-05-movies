const APIKEY = 'a862388c03cb8401487df36e94a12066';
const URL = `https://api.themoviedb.org/3`;

//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

export const getPopularMovies = async () => {
  return await fetch(`${URL}/trending/all/week?api_key=${APIKEY}`).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};

export const getMovieById = async id => {
  console.log('api', id);
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
  ).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};

// export const getMovieImage = async path => {
//   return await fetch(
//     `https://image.tmdb.org/t/p/w500${path}?api_key=${APIKEY}`
//   ).then(res => {
//     if (!res.ok) {
//       //   return Promise.reject(new Error(`No ${searchQuery} picture`));
//     }
//     return res.json();
//   });
// };
