import axios from 'axios'

const apiCalls = axios.create({
    baseURL: 'https://reqres.in/api'
})

export default {
   getUsers(){
    return apiCalls.get('/users?page=1&per_page=12')
       .then(response => {
            return response.data.data
       })
       .catch(error => {
           console.log('Call error ', error)
       })
   }
}