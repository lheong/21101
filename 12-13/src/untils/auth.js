import Cookies from "js-cookie"

const Tokerkey = "Authorization"

export function getToken() {
  return Cookies.get(Tokerkey)
}

export function setToken(token) {
  return Cookies.set(Tokerkey, token)
}

export function removeToken() {
  return Cookies.remove(Tokerkey)
}
