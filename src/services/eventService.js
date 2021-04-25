/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/grsahil20/vue-3-sample-data",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getEvents = async () => await apiClient.get("/events");
