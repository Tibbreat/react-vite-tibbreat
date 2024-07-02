// import axios from "axios";
import axios from "./axios.customize"

const createUserAPI = async (fullName, email, password, phone) => {
    const URL_ADD_NEW_USER = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    };
    return await axios.post(URL_ADD_NEW_USER, data);
}
const getAllUserAPI = async () => {
    const URL_GET_ALL_USER = "/api/v1/user";
    return await axios.get(URL_GET_ALL_USER);
}
const updateUserAPI = async (_id, fullName, phone) => {
    const URL_UPDATE_USER = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    };
    return await axios.put(URL_UPDATE_USER, data);
}
export {
    createUserAPI, getAllUserAPI, updateUserAPI
}
