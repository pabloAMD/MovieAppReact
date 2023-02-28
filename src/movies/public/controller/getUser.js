export const getUser = async (email,password) => {
    const url = import.meta.env.VITE_URL_API
    var requestOptions = {
        method: 'GET',
    };

    try {
        const data = await fetch(`${url}/verify-user?email=${email}&password=${password}`, requestOptions).then((res) => res.json());
        return data;
    } catch (error) {
        return error;
    } 
}