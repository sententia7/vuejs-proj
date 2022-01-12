import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/news',
            name: 'news',
            component: NewsView
            // component: createListView("NewsView")
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView
            // component: createListView("AskView")
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
            // component: createListView("JobsView")
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});