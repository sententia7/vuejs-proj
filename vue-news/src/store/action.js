import {
    fetchAskList,
    fetchJobsList,
    fetchNewList,
    fetchUserInfo,
    fetchItem, fetchList
} from "../api";

export default {
    async FETCH_NEWS({commit}) {
        try {
           const response = await fetchNewsList();
           commit('SET_NEWS', response.data);
           return response;
        }catch (e) {
            console.log(e);
        }
    },
    async FETCH_ASK({commit}) {
        try{
            const response = await fetchAskList();
            commit('SET_ASK', response.data);
            return response;
        }catch (e) {
            console.log(e);
        }
    },
    async FETCH_JOBS({commit}) {
        try{
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        }catch (e) {
            console.log(e);
        }
    },
    async FETCH_USER({commit}, name) {
        try{
            const response = await fetchUserInfo(name);
            commit('SET_USER', response.data);
            return response;
        }catch (e) {
            console.log(e);
        }
    },
    async FETCH_ITEMINFO({commit}, itemId) {
        try{
            const response = await fetchItem(itemId);
            commit('SET_ITEM', response.data);
            return response;
        }catch (e) {
            console.log(e);
        }
    },
    async FETCH_LIST({commit}, pageName){
        try{
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        }catch (e) {
            console.log(e);
        }
    }
}