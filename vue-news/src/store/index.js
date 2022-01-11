import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import actions from './action';
import state from './state';
import getters from "./getter";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
