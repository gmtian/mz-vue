import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { 
            path: '/films',  
            component: () => import('./views/Film.vue'),
            children: [
                { path: 'nowPlaying', component: () => import('./components/FilmNowPlaying.vue')},
                { path: 'comingSoon', component: () => import('./components/FilmComingSoon.vue')},
                { path: '', redirect: '/films/nowPlaying'}
            ]
        },
        { path: '/cinemas', component: () => import('./views/Cinema.vue') },
        { path: '/center', component: () => import('./views/Center.vue') },
    ]
})