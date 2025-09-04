import axios from "axios";


export async function login(email: string, password: string) {
    return await axios.post('/api/token/create/', {email, password});
};

export async function signup(email: string, password: string) {
  return axios.post('/api/users/', { email, password });
};

export async function logout() {
  return axios.post('/api/logout/');
};

export async function getUser() {
  return axios.get('/auth/users/me/');
};

export async function refreshToken() {
    return axios.post('/api/token/refresh/')
};