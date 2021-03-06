import api from 'api'
import axios from 'axios'
import qs from 'qs'

export {
  signup,
  signin,
  signout,
  getUserInfo,
  getUsersList
}

function signup (obj) {
  return axios.post(`${api.url}/api/Account/Register`, obj)
}

function signin (obj) {
  // eslint-disable-next-line camelcase
  obj.grant_type = 'password'
  return axios.post(`${api.url}/Token`, qs.stringify(obj))
}

function signout () {
  return axios.post(`${api.url}/api/Account/Logout`)
}

function getUserInfo () {
  return axios.get(`${api.url}/api/Account/UserInfo`)
}

function getUsersList () {
  return axios.get(`${api.url}/api/Account/Users`)
}
