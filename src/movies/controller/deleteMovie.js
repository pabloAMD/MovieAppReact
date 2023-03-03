export const DeleteMovieById = async(id) => {

    const url = import.meta.env.VITE_URL_API

    var requestOptions = {
        method: 'DELETE',
    };

    try {
        const data = await fetch(`${url}/delete-movie?id=${id}`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 

  
}