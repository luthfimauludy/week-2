import axios from "axios";

const baseUrl = "http://localhost:3000";

const callJSON = async (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {}
) => {
  const options = {
    url: baseUrl + endpoint,
    method,
    headers,
    params,
    data,
  };

  return axios(options).then((response) => {
    const responseAPI = response?.data;
    return responseAPI;
  });
};

export default callJSON;
