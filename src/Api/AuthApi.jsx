import axios from 'axios';
const authApi = axios.create({
  baseURL: 'http://209.38.247.212:8000',

});
export default authApi;
