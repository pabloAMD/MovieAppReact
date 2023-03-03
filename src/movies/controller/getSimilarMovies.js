

export const getSimilarMovies = async(genre) => {
  const url = import.meta.env.VITE_URL_API

    var requestOptions = {
        method: 'GET',
    };

    try {
        const data = await fetch(`${url}/getSimilar?genre=${genre}`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 
}
