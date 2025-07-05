import axios from "axios";
const URL_LOGIN ="http://127.0.0.1:3000/api/auth/login" // qui cambia a  la ulr  del loginuqe hagan

export function Login(user){
    return axios.post(URL_LOGIN,user);
}