import { createAxiosInstance } from '../config';

const GenerateOTP = createAxiosInstance(); // this will now return axios instance

export const LoginAPI = async params => {
  console.log('Params mobile number received', params);

  try {
    // ✅ if backend expects query string params:
    const response = await GenerateOTP.get('/generateOtp', {
      params: { phone: params.phone }, // phone must match your API param
    });

    return response.data;
  } catch (error) {
    console.error('Error getting OTP', error);
    throw error;
  }
};

export const VerifyOTP = async params => {
  console.log('Params mobile number and OTP received', params);

  try {
    // ✅ if backend expects query string params:
    const response = await GenerateOTP.get('/userLogin2', {
      params: { phone: params?.phone, user_otp: params?.user_otp }, // phone must match your API param
    });

    return response.data;
  } catch (error) {
    console.error('Error Verifying OTP', error);
    throw error;
  }
};
