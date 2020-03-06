import axios from 'axios';

const state = {
    accessToken: null,
};

const mutations = {
    setAccessToken: (state, value) => {
        state.accessToken = value;
    },
};

const getters = {
    isAuthenticated: (state) => {
        return state.accessToken !== null;
    },
};

const actions = {
    /**
     * Login a user
     * 
     * @param context {Object} 
     * @param credentials {Object} User credentials
     * @param credentials.email {string} User email
     * @param credentials.password {string} User password
     */
    login(context, credentials) {
        return axios.post('http://staging.shifl.com/api/login', credentials)
            .then((response) => {
                // retrieve access token
                const { access_token: accessToken } = response.data;

                // commit it
                context.commit('setAccessToken', accessToken);

                return Promise.resolve();
            })
            // .catch((error) => Promise.reject(error.response));
    },
};


export default {
  state,
  getters,
  actions,
  mutations
};
