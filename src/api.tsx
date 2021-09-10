import axios from "axios";

const apiFactory = (baseUrl: string) => {
  const config = {
    baseURL: baseUrl,
  };
  const service = axios.create(config);
  return service;
};
export default apiFactory;
