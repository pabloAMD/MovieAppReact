
export const getMovies = async () => {

   const url = import.meta.env.VITE_URL_API
    
    var requestOptions = {
        method: 'GET',
    };

    try {
        const data = await fetch(url, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 
}