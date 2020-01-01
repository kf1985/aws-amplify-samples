import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import Authenticator from '@/components/Authenticator'
import Main from '@/components/Main'

Vue.use(Router)

const router =  new Router({
    routes: [
      {
          path: '/',
          name: 'Main',
          component: Main
      },
      {
          path: '/auth',
          name: 'Authenticator',
          component: Authenticator
        }
    ]
  })

if (isLogined()) {
    router.push({path: '/'})
}else{
    router.push({path: '/auth'})
}

AmplifyEventBus.$on('authState', 
    async (state) => {
        if (state === 'signedIn'){
            router.push({path: '/'})
        } else if (state === 'signedOut') {
            router.push({path: '/auth'})
        }
    });

function isLogined(){
    // Gets current authenticated user
    Auth.currentAuthenticatedUser().then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}

export default router