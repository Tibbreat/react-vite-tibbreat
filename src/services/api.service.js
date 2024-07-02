// import axios from "axios";
import axios from "./axios.customize"

const createUserAPI = async (fullName, email, password, phone) => {
    const URL_ADD_NEW_USER = "/api/v1/user";
    const data = {
        fullName,
        email,
        password,
        phone
    };
    return await axios.post(URL_ADD_NEW_USER, data);
}
const getAllUserAPI = async () => {
    const URL_GET_ALL_USER = "/api/v1/user";
    return await axios.get(URL_GET_ALL_USER);
}
export {
    createUserAPI, getAllUserAPI
}
