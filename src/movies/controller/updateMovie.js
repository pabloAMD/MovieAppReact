

export const updateMovie = async(id, body) => {
    
  const url = import.meta.env.VITE_URL_API

    var requestOptions = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    };

    try {
        const data = await fetch(`${url}/update-movie?id=${id}`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 
}
