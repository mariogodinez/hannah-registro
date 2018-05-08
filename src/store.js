
// Se importa vue
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	logged: false,
	user: {}
}

const mutations = {
	SET_LOGGED(state, value){
		state.logged = value
	}
	 
}

const getters = {
	userInfo(state){
		return state.user
	},
	logged(state){
		return state.logged
	}
}


const actions = {
	 setLogged({commit}, value){
	 	commit('SET_LOGGED', value)
	 }
}



export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});
