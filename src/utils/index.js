import axios from "axios";

const developmentUrl = " http://localhost:5000/api/v1";
const productionUrl = "https://shopshine-backend.onrender.com";
export const customFetch = axios.create({
  baseURL: developmentUrl,
  withCredentials: true, // IMPORTANT!!!
});
