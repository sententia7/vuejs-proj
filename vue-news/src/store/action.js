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
    FETCH_USER({commit}, name) {
        return fetchUserInfo(name)
            .then(({data}) => {
                commit("SET_USER", data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEMINFO({commit}, itemId) {
        return fetchItem(itemId)
            .then(({data}) => {
                commit("SET_ITEM", data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
            .then(({data}) => {
                commit("SET_LIST", data);
            })
            .catch(error => {
               console.log(error);
            });
    }
}