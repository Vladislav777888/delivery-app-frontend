import axios from 'axios';
import { nanoid } from 'nanoid';
import { LS_USER_ID } from 'constants/localStorage';

let userId = localStorage.getItem(LS_USER_ID);

if (!userId) {
  const id = nanoid();
  localStorage.setItem(LS_USER_ID, id);
  userId = localStorage.getItem(LS_USER_ID);
}

const instance = axios.create({
  baseURL: 'http://localhost:3030/api',
});

export const getAllProducts = async (params = {}) => {
  const { data } = await instance.get('/products', {
    params: {
      key: `${userId}`,
      ...params,
    },
  });

  return data;
};

export const getProductsByCategory = async (params = {}) => {
  const { data } = await instance.get(`/products/${params.category}`, {
    params: {
      key: `${userId}`,
      ...params,
    },
  });

  return data;
};

export const addProductToCart = async id => {
  const { data } = await instance.post(`/products/${id}/order?key=${userId}`);

  return data;
};
