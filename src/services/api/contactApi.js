import axios from "axios";
import { message } from "antd"; 
import {
  isAndroid,
  isIOS,
  isWindows,
  isMacOs,
  isMobile,
  isTablet,
} from "react-device-detect";

// Device detection function
const getDeviceType = () => {
  if (isAndroid) return "Android";
  if (isIOS) return "iOS";
  if (isWindows) return "Windows";
  if (isMacOs) return "MacOS";
  if (isMobile) return "Mobile";
  if (isTablet) return "Tablet";
  return "Unknown Device";
};

// API base URL (use relative URL for local development)
const apiBaseUrl = "http://localhost:3000/api"; 

const ContactApi = {
  create: async (body) => {
    const requestBody = { ...body, deviceInfo: getDeviceType() };

    try {
      const response = await axios.post(
        `${apiBaseUrl}/contact/create`, 
        requestBody
      );

      if (response.status === 201) {
        message.success("Our team will contact you shortly");
        return response.data.data;
      } else {
        message.error(response.data.message || "Error in response");
      }
    } catch (error) {
      // Improved error handling
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      message.error(errorMessage);
      return null;
    }
  },
};

export default ContactApi;
