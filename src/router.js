import Vue from "vue";
import VueRouter from "vue-router";

window.isLogin = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { 
			path: '/', 
			component: () => import('./views/Home.vue'),
			children: [
				{ 
					path: 'films',  
					component: () => import('./views/Film.vue'),
					children: [
						{ path: 'nowPlaying', component: () => import('./components/FilmNowPlaying.vue')},
						{ path: 'comingSoon', component: () => import('./components/FilmComingSoon.vue')},
						{ path: '', redirect: '/films/nowPlaying'}
						]
				},
				{ path: 'cinemas', component: () => import('./views/Cinema.vue') },
				{ path: 'center', component: () => import('./views/Center.vue') },
				{ path: '', redirect: '/films/nowPlaying' },
			]
        },
        
		{ path: '/film/:id', name: 'detail', component: () => import('./views/Detail.vue') },
		{ path: '/city', component: () => import('./views/City.vue') },
		{ 
			path: '/card', 
			component: () => import('./views/Card.vue'),
			beforeEnter: (to, from, next) => {
				if(!window.isLogin){
					next({
						path: '/login',
						query: {
							redirect: to.fullPath
						}
					})
				}else{
					next()
				}
			}
		},
		{ 
			path: '/money', 
			component: () => import('./views/Money.vue'),
			beforeEnter: (to, from, next) => {
				if(!window.isLogin){
					next({
						path: '/login',
						query: {
							redirect: to.fullPath
						}
					})
				}else{
					next()
				}
			}
		},
		{ 
			path: '/login', 
			component: () => import('./views/Login.vue'),
			beforeEnter: (to, from, next) => {
				// console.log('路由独享的守卫,当要进去登录页时触发')
				next();
			}
		},
		{ path: '*', redirect: '/films/nowPlaying' },
    ]
})

router.beforeEach((to, from, next) => {
	// to and from are both route objects. must call `next`.
	// console.log('全局前置守卫')
	next();
}),

router.afterEach((to, from) => {
	// to and from are both route objects.
	// console.log('全局后置守卫')
})

export default router;