// const APIKEY = 'a862388c03cb8401487df36e94a12066';
const URL =
  'https://api.themoviedb.org/3/trending/all/week?api_key=a862388c03cb8401487df36e94a12066';

export const movieService = async () => {
  return await fetch(URL).then(res => {
    if (!res.ok) {
      //   return Promise.reject(new Error(`No ${searchQuery} picture`));
    }
    return res.json();
  });
};
