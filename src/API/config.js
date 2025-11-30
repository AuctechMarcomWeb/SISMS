import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const fullBaseURL = `${BASE_URL}/api`;
console.log("🌍 BASE_URL Loaded ==> ", BASE_URL);
console.log("🔗 Full Base API URL ==> ", fullBaseURL);

export const createAxiosInstance = (routeBase = '', extraHeaders = {}) => {
  console.log("🚀 Creating Axios Instance");
  console.log("📍 Route Base:", routeBase);
  console.log("📦 Extra Headers:", extraHeaders);
  console.log("🧠 Final BaseURL going to axios:", `${fullBaseURL}/${routeBase}`);

  const instance = axios.create({
    baseURL: `${fullBaseURL}/${routeBase}`,
    headers: {
      'Content-Type':
        extraHeaders && extraHeaders['Content-Type']
          ? extraHeaders['Content-Type']
          : 'application/json',
      ...extraHeaders,
    },
  });

  // ------- Request Interceptor -------
  instance.interceptors.request.use(
    async (config) => {
      console.log("🟡 [REQUEST] URL:", config?.baseURL + config?.url);
      console.log("🟡 [REQUEST] Method:", config?.method);
      console.log("🟡 [REQUEST] Params:", config?.params);
      console.log("🟡 [REQUEST] Body:", config?.data);
      console.log("🟡 [REQUEST] Default Headers:", config?.headers);

      const token = await AsyncStorage.getItem("token");
      console.log("🔑 Token from AsyncStorage =>", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("🔐 Authorization Header Set Successfully");
      } else {
        console.log("❗ No token found — Request sent without Authorization");
      }

      return config;
    },
    (error) => {
      console.error("❌ REQUEST Interceptor Error:", error);
      return Promise.reject(error);
    }
  );

  // ------- Response Interceptor (Optional but useful) -------
  instance.interceptors.response.use(
    (response) => {
      console.log("🟢 [RESPONSE SUCCESS]", response?.config?.url);
      console.log("📦 Response Data:", response?.data);
      return response;
    },
    (error) => {
      console.error("🔴 [RESPONSE ERROR]", error?.response?.config?.url);
      console.error("❌ Error Response:", error?.response || error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const createHeaders = (extraHeaders = {}) => ({
  'Content-Type': 'application/json',
  ...extraHeaders,
});
