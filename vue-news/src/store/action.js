import {
    fetchAskList,
    fetchJobsList,
    fetchNewList,
    fetchUserInfo,
    fetchItem
} from "../api";

export default {
    FETCH_NEWS({commit}) {
        fetchNewList()
            .then(({data}) => {
                commit("SET_NEWS", data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASK({commit}) {
        fetchAskList()
            .then(({data}) => {
                commit("SET_ASK", data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({data}) => {
                commit("SET_JOBS", data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER({commit}, name) {
        fetchNewList(name)
            .then(({data}) => {
                commit("SET_NEWS", data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEMINFO({commit}, itemId) {
        fetchNewList(itemId)
            .then(({data}) => {
                commit("SET_NEWS", data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}