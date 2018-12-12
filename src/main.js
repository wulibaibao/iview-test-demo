import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);
Vue.use(iView);

Vue.config.productionTip = false

router.beforeEach(
    (to, from, next) => {
        if( store.state.isLogin ) 
        {
            if( store.state.AppComponent !== 'Container' ) 
                store.commit('alreadyLogin')
        }
        else
        {
            if( store.state.AppComponent !== 'Login' ) 
                store.commit('noLogin')
        }
        
        next()
    }
)

const HorizontalMenu = () => import('@/components/ContainerComponents/HorizontalMenu')

Vue.use(HorizontalMenu)
Vue.component('horizontal-menu' , HorizontalMenu)

new Vue(
    {
        router,
        store,
        render: h => h(App),
    }
)
.$mount('#app')
