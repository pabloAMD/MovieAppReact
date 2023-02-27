

export const getById = async(id) => {

    const url = import.meta.env.VITE_URL_API

    var requestOptions = {
        method: 'GET',
    };

    try {
        const data = await fetch(`${url}/getByid?id=${id}`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 

  
}
