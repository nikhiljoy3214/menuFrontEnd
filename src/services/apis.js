import { BASE_URL } from "./baseUrl";
import { commonRequest } from "./commonRequest";

export const getMenuApi = async () => {
    return await commonRequest("GET", `${BASE_URL}menu`, {})
  }
  