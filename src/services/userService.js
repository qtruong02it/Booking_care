import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {
        email: email,
        password: password
    });
};
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-user ', data)
}
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', {
    //     data: { id: id }
    // });
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
};
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

export default handleLoginApi;
export { handleLoginApi, createNewUserService, getAllUsers, deleteUserService, editUserService };
