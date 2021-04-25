/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/grsahil20/vue-3-sample-data",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const dogClient = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image/random",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getEvents = async () => await apiClient.get("/events");
export const getEvent = async (id) => await apiClient.get(`/events/${id}`);
export const getDog = async () => await dogClient.get("/events");
