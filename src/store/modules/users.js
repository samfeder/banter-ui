import API from '../../constants/api';
import apiRequest from '../helpers';

export default {
  state: {
    currentUser: {},
    isRequesting: false,
    errored: false,
    error: null,
  },
  actions: {
    loginUser({
      commit,
    }, { authEmail, authPassword }) {
      const requestData = {
        url: `${API.BASE_URL}${API.USERS}${API.LOGIN}`,
        method: 'POST',
        data: { email: authEmail, password: authPassword },
      };
      const mutations = {
        preCommit: 'fetchCurrentUserRequest',
        successCommit: 'fetchCurrentUserSuccess',
        errorCommit: 'authUserError',
      };
      return apiRequest({ requestData, mutations, commit });
    },
    signupUser({
      commit,
    }, { authName, authEmail, authPassword }) {
      const requestData = {
        url: `${API.BASE_URL}${API.USERS}${API.REGISTER}`,
        method: 'POST',
        data: { name: authName, email: authEmail, password: authPassword },
      };
      const mutations = {
        preCommit: 'fetchCurrentUserRequest',
        successCommit: 'fetchCurrentUserSuccess',
        errorCommit: 'authUserError',
      };
      return apiRequest({ requestData, mutations, commit });
    },
    fetchCurrentUser({
      commit,
    }) {
      const requestData = {
        url: `${API.BASE_URL}${API.USERS}${API.ME}`,
      };
      const mutations = {
        preCommit: 'fetchCurrentUserRequest',
        successCommit: 'fetchCurrentUserSuccess',
        errorCommit: 'currentUserError',
      };
      return apiRequest({ requestData, mutations, commit });
    },
  },
  mutations: {
    fetchCurrentUserRequest(state) {
      state.isRequesting = true;
      state.error = null;
    },
    fetchCurrentUserSuccess(state, payload) {
      state.currentUser = payload;
      state.isRequesting = false;
      state.error = null;
    },
    currentUserError(state) {
      state.isRequesting = false;
    },
    authUserError(state, error) {
      state.isRequesting = false;
      state.errored = true;
      state.error = error.message;
    },
  },
};
