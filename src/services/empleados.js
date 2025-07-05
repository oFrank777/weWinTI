import axios from "axios";
const URL_EMPLEADOS ="https://jsonplaceholder.typicode.com/users";

export function GetEmpleados( ){
    return axios.get(URL_EMPLEADOS);
  }