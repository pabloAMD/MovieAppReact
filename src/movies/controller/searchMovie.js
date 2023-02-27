export const searchMovieApi = async (movieTitle) => {
    const url = import.meta.env.VITE_URL_API
    var requestOptions = {
        method: 'GET',
    };

    try {
        const data = await fetch(`${url}/search?title=${movieTitle}`, requestOptions).then((res) => res.json());
      
        return data;
    } catch (error) {
        return error;
    } 
}