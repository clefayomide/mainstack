import axios from "axios";

export const api = axios.create({
  baseURL: "https://fe-task-api.mainstack.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  transformResponse: [
    (data) => {
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    },
  ],
});
