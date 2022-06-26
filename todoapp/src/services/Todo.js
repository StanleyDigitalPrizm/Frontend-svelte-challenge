import axios from 'axios';
import {getAPIBackend, getAuthToken} from '../services/Config'

const getTodoList = async () => {
    try {
      var API_BACKEND = getAPIBackend();  
      const res = await axios.get(`${API_BACKEND}/todos`, {
        headers: {
          'AUTH-TOKEN': getAuthToken()
        }
      });
      return res.data;
    } catch (e) {
      console.error("Unable to fetch todos", e);
      if(e && e.response && e.response.status == 401){
        window.location.href = '/#/login';
      }
      return e.response.data;
    }
};

const createTodo = async (params) => {
  try {
    var API_BACKEND = getAPIBackend();  
    const res = await axios.post(`${API_BACKEND}/todos`, params, {
      headers: {
        'AUTH-TOKEN': getAuthToken()
      }
    });
    return res.data;
  } catch (e) {
    console.error("Unable to create todos", e);
    if(e && e.response && e.response.status == 401){
      window.location.href = '/#/login';
    }
    return e.response.data;
  }
};

const updateTodo = async (id,params) => {
  try {
    var API_BACKEND = getAPIBackend();  
    const res = await axios.put(`${API_BACKEND}/todos/${id}`, params, {
      headers: {
        'AUTH-TOKEN': getAuthToken()
      }
    });
    return res.data;
  } catch (e) {
    console.error("Unable to update todos", e);
    if(e && e.response && e.response.status == 401){
      window.location.href = '/#/login';
    }
    return e.response.data;
  }
};

const partiallyUpdateTodo = async (id,params) => {
  try {
    var API_BACKEND = getAPIBackend();  
    const res = await axios.patch(`${API_BACKEND}/todos/${id}`, params, {
      headers: {
        'AUTH-TOKEN': getAuthToken()
      }
    });
    return res.data;
  } catch (e) {
    console.error("Unable to patch todos", e);
    if(e && e.response && e.response.status == 401){
      window.location.href = '/#/login';
    }
    return e.response.data;
  }
};

const deleteTodo = async (id) => {
  try {
    var API_BACKEND = getAPIBackend();  
    const res = await axios.delete(`${API_BACKEND}/todos/${id}`, {
      headers: {
        'AUTH-TOKEN': getAuthToken()
      }
    });
    return res.data;
  } catch (e) {
    console.error("Unable to delete todos", e);
    if(e && e.response && e.response.status == 401){
      window.location.href = '/#/login';
    }
    return e.response.data;
  }
};

export { getTodoList, createTodo, updateTodo, partiallyUpdateTodo, deleteTodo };