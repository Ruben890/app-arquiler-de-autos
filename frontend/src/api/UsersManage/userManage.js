import axios from "axios";

const UsersApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/users/'
})


export const UsersLogin = (dataLogin) => UsersApi.post('Login/', dataLogin)

export const GetListUsers = async () => {
    const res = await UsersApi.get('listUsers/')
    return res.data
}