import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const instance =  axios.create({
//   baseURL : 'http://192.168.0.108:3000/'
// });


// instance.interceptors.request.use(
//   async config => {
//     config.baseURL= await getBaseUrl();
//     const token = await AsyncStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;  
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// async function getBaseUrl() {
//   var value = await AsyncStorage.getItem('baseUrl')
//   return value;
// }


// export default instance;

// axios.defaults.baseURL = 'http://192.168.0.108:3000'

const instance =  axios.create({
  baseURL : 'http://7cbce1890508.ngrok.io'
});


instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = "Bearer "+token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

export default instance;
