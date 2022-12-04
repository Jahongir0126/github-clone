import axios from "axios";

const BASE_URL="https://api.github.com/users/Jahongir0126"
const api={
    reposData:async function(){
        return await axios(BASE_URL + "/repos")
    },
    userData: async function(){
        return await axios (BASE_URL)
    },
    searchUser:async function (user_name){
        return await axios(`https://api.github.com/search/users?q=${user_name}`)
    },
    followersData: async function(){
        return axios(BASE_URL+ "/followers")
    },
    followingsData: async function(){
        return axios(BASE_URL+ "/following")
    }




}
export default api;