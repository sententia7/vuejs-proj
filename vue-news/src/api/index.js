import axios from 'axios';

const conig = {
    baseUrl : 'https://api.hnpwa.com/v0'
};

function fetchNewList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItem(item) {
    return axios.get(`${config.baseUrl}item/${item}.json`);
}

export {
    fetchNewList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItem
}