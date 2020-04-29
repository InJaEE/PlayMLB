import Vue from 'vue';
import VueRouter from 'vue-router';
import StartView from '../views/StartView.vue';
import ClubList from '../views/ClubList.vue';
import PlayerDetail from '../views/PlayerDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'start',
        },
        {
            path: '/start',
            name: 'start',
            component: StartView,
        },
        {
            path: '/clublist',
            name: 'clublist',
            component: ClubList,
        },
        {
            path: '/player/:code',
            component: PlayerDetail
        }
    ]
});

export default router;