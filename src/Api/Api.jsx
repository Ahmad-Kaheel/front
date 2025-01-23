import axios from 'axios';
import { setUser, logout } from '../state/slices/UserSlice'; 
import store from '../state/Store'; 
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'http://209.38.247.212:8000/',
});

// Interceptor للتعامل مع الأخطاء
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(error.response?.status);
    // تحقق إذا كانت الاستجابة 401
    if (error.response?.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        try {
          const refreshToken = Cookies.get('refresh_token');

      
          if (refreshToken) {
            const response = await axios.post(`${api.defaults.baseURL}/token/refresh/`, {
              refresh: refreshToken,
            });
            console.log("kkkkk");
            // تحديث Access Token في Redux
            store.dispatch(
              setUser({
                ...store.getState().user.userInfo,
                access_token: response.data.access,
              })
            );
      
            // تخزين Refresh Token الجديد في الكوكيز (إذا كان الخادم يعيد واحدًا)
            if (response.data.refresh) {
              document.cookie = `refresh_token=${response.data.refresh}; HttpOnly; Secure; SameSite=Strict; Path=/`;
            }
      
            // إعادة إرسال الطلب الأصلي
            originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
            return api(originalRequest);
          } else {
            // تسجيل الخروج وحذف الكوكيز
            document.cookie = `refresh_token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`;
            store.dispatch(logout());
            // window.location.href = '/login';
          }
        } catch (refreshError) {
          console.error('Failed to refresh token:', refreshError);
      
          // تسجيل الخروج وحذف الكوكيز
          document.cookie = `refresh_token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`;
          store.dispatch(logout());
        //   window.location.href = '/login';
        }
      }
      

    return Promise.reject(error);
  }
);

// Interceptor لإضافة التوكن للطلبات
api.interceptors.request.use((config) => {
  const token =  Cookies.get('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
