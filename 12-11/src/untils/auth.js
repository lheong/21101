import Cookies from "js-cookie";
/** Authorization  token跟据接口文档变化，可以是其他的 */
const TokenKey = "Authorization";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
