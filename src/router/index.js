import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routerOptions = [ {
    path: '/',
    name: 'Home'
}, {
    path: '/sanriodex',
    name: 'SanrioDex'
}, {
    path: '/quiz',
    name: 'Quiz'
},{ 
    path: '/memorama',
    name: 'Memorama'
}]
  
const routes = routerOptions.map(r => {
    return {
        ...r,
        component: () =>
                import(/* webpackChunkName: "[request]" */ `@/views/${r.name}/Index.vue`)
                // importa ese componente en esa ruta, corresponde al nombre de la carpeta de r.name
    }
})

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router