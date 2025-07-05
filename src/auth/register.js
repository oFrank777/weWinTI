import axios from "axios";
const URL_REGISTER ="http://127.0.0.1:3000/api/auth/register"

export function registerUser(user){
    return  axios.post(URL_REGISTER,user);
}