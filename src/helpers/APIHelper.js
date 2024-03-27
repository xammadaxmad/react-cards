import axios from "axios"
import LSHelper from "./LSHelper"
const AUTH = LSHelper.get("AUTH")
if (AUTH != null){
    axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH.token}`

}

const APIHelper = {
    "get": function(strUrl){
        return axios.get(strUrl).then(response=>{
            return response.data;
        }).catch(error=>{
           return error.response.data
        })
    },
    "post": function(strUrl,data){
        return axios.post(strUrl,data).then(response=>{
            return response.data
        }).catch(error=>{
            return error.response.data
        })
    }


}

export default APIHelper