import axios from "axios";
const rootApiEp = "http://localhost:8000/api/v1";
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// post new user

export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/users",
    data,
  };
  return apiProcessor(obj);
};

//Login User

export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/users/login",
    data,
  };
  return apiProcessor(obj);
};
