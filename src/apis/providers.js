import axios from "axios";
import { host } from "config/host";
export function getProvidersOrProvider(peerid) {
  return axios.get(`${host}/provider/info?${peerid ? "peerid=" + peerid : ""}`);
}
