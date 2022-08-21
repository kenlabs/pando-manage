import axios from "axios";
import { host } from "config/host";
export function getSnapshots() {
  return axios.get(`${host}metadata/list`);
}

export function getSnapshotInfo(cid) {
  return axios.get(`${host}metadata/snapshot?cid=${cid}`);
}
