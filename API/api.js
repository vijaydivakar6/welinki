import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
  baseURL : 'http://13.127..200:8556/api'
});


instance.interceptors.request.use(
  async config => {
    config.baseURL= await getBaseUrl();
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

async function getBaseUrl() {
  var value = await AsyncStorage.getItem('baseUrl')
  return value;
}


export default instance;