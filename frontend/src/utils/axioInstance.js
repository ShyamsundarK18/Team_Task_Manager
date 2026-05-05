import axios from "axios"

const BASE_URL = "https://teamtaskmanager-production-7f4c.up.railway.app/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export default axiosInstance
