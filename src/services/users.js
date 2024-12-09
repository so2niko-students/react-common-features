import axios from 'axios';

const USER_URL = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users';

const getAlltUsers = () => {
    return axios.get(USER_URL).then((response) => {
        // handle success
        console.log(response.data);
        return response.data;
    });
}

const getUserById = (id) => {
    const URL = `${USER_URL}/${id}`;

    return axios.get(URL).then((response) => {
        // handle success
        console.log(response.data);
        return response.data;
    });
}

const createUser = (user) => {
    return axios({
        method: 'post',
        url: USER_URL,
        data: user
    });
}

const updateUser = (id, user) => {
    const URL = `${USER_URL}/${id}`;
    return axios.put(URL, user);
}

const deleteUserById = (id) => {
    const URL = `${USER_URL}/${id}`;
    return axios.delete(URL);
}
 
export {
    createUser,
    deleteUserById,
    getAlltUsers,
    getUserById,
    updateUser,
}