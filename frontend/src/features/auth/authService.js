import axios from 'axios'

const API_URL = '/api/users/'

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL,userData)

    if(response.data){
        //transfer javascript object to json form & save into local storage
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logout user
const logout = () => localStorage.removeItem('user')

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login',userData)

    if(response.data){
        //transfer javascript object to json form & save into local storage
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
    logout,
    login
}

export default authService