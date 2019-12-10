import axios from "axios";

export const axiosWithAuth = () => {
  // const token = "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98"
  const token = localStorage.getItem("token");
  return axios.create({
    baseUrl: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  });
};
