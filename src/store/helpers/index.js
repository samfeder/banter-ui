import axios from 'axios';

axios.defaults.withCredentials = true;

export default async function apiRequest({ requestData, mutations, commit }) {
  const {
    url, queries = {}, method = 'GET', data = {},
  } = requestData;
  const { preCommit, successCommit, errorCommit } = mutations;

  const queryParams = Object.keys(queries).map((key) => `${key}=${encodeURIComponent(queries[key])}`).join('&');

  return new Promise((resolve, reject) => {
    commit(preCommit);
    return axios({
      url: `${url}${queryParams ? `?${queryParams}` : ''}`,
      method,
      data,
    }).then((response) => {
      if (response.status === 200) {
        commit(successCommit, response.data);
        resolve(response.data.original);
      } else {
        reject(response);
      }
    })
      .catch((error) => {
        commit(errorCommit, error);
        reject(error);
      });
  });
}
