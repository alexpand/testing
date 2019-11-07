import apiCalls from '../../services/apiCalls'

export default {
    namespaced: true,
    state: {
        users: []
    },

    actions: {
        getTheUsers({commit}){
            apiCalls.getUsers()
            .then(response => {
                commit('saveTheUsers', response)
            })
        }
    },

    mutations: {
        saveTheUsers(state, users){
            state.users = users
        }
    }
}