const BASE_URL = process.env.REACT_APP_BASEURL;

export const API = {
  MAIN: process.env.REACT_APP_BASEURL,
  LOGIN: `${BASE_URL}/admin/login`,
  EDITOR: `${BASE_URL}/editor/made`,
  IMAGE: `${BASE_URL}/editor/image`,
  TEMPLATE: `${BASE_URL}/main/form`,
  LINK: `${BASE_URL}/link`,
  STATICS: `${BASE_URL} / statics`,
  SURVEYPAGE: `${BASE_URL}/surveypage`,
  OPINION: `${BASE_URL}/opinion`,
};
