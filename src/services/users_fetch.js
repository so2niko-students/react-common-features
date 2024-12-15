const USER_URL = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/users';

const getAlltUsers = () => {
    return fetch(USER_URL)
        .then(r => r.json())
        .then((data) => {
            // handle success
            console.log(data);
            return data;
        });
}

const getUserById = (id) => {
    const URL = `${USER_URL}/${id}`;

    return fetch(URL)
        .then(r => r.json())
        .then((data) => {
            // handle success
            console.log(data);
            return data;
        });
}

const createUser = (user) => {
    return fetch(USER_URL, {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(r => r.json());
}

// string (aka JSON)
// ArrayBuffer
// TypedArray
// DataView
// Blob
// File
// URLSearchParams
// FormData
// ReadableStream

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