import axios from "axios";

export async function login(email: string, password: string) {
  return await axios.post("/api/token/create/", {
    email: email,
    password: password,
  });
}

export async function refreshToken() {
  return axios.post("/api/token/refresh/");
}

export async function logout() {
  return axios.post("/api/logout/");
}

export async function signUp(
  email: string,
  username: string,
  password: string,
  confirmPassword: string
) {
  return axios.post("/auth/users/", {
    email: email,
    username: username,
    password: password,
    re_password: confirmPassword,
  });
}

export async function getUser() {
  return axios.get("/auth/users/me/");
}

export async function forgotPassword(email: string) {
  return axios.post("/auth/users/reset_password/", { email: email });
}

export async function activateAccount(uid: string, token: string) {
  return axios.post("/auth/users/activation/", { uid: uid, token: token });
}

export async function resetPassword(
  uid: string,
  token: string,
  newPassword: string,
  reNewPassword: string
) {
  return axios.post("/auth/users/reset_password_confirm/", {
    uid: uid,
    token: token,
    new_password: newPassword,
    re_new_password: reNewPassword,
  });
}
