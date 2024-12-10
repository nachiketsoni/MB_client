import axiosInstance from '../utils/axiosInstance';


export const signUp = async (data) => {
    try {
      const response = await axiosInstance.post('/user/signup', data);
      return response.data;
    } catch (error) {
      console.error("Error adding task", error);
      throw error;
    }
  };
export const login = async (data) => {
    try {
      const response = await axiosInstance.post('/user/login', data);
      return response.data;
    } catch (error) {
      console.error("Error adding task", error);
      throw error;
    }
  };
export const getCart = async () => {
    try {
      const response = await axiosInstance.post('/user/cart');
      return response.data;
    } catch (error) {
      console.error("Error fetch cart", error);
      throw error;
    }
  };
export const getUser = async () => {
    try {
      const response = await axiosInstance.post('/user/user');
      return response.data;
    } catch (error) {
      console.error("Error fetch user", error);
      throw error;
    }
  };
export const checkoutApi = async () => {
    try {
      const response = await axiosInstance.post('/user/checkout');
      return response.data;
    } catch (error) {
      console.error("Error fetch cart", error);
      throw error;
    }
  };
export const myOrders = async () => {
    try {
      const response = await axiosInstance.post('/user/orders');
      return response.data;
    } catch (error) {
      console.error("Error fetch cart", error);
      throw error;
    }
  };