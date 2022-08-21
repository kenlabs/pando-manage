import axios from "axios";
import { host } from "config/host";
export function getSystemInfo() {
  return axios.get(`${host}/pando/info`);
}
