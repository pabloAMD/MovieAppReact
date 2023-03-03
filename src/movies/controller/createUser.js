
export const createUser = async (body) => {

    const url = import.meta.env.VITE_URL_API

   
    var requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    };

    try {
        const data = await fetch(`${url}/create-user`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    }

}
