
export const getMovies = async (page) => {

   const url = import.meta.env.VITE_URL_API
    
    var requestOptions = {
        method: 'GET',
    };

    try {
        const data = await fetch(`${url}?page=${page}&limit=6`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 
}