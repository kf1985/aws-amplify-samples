<!--  認証コンポーネント: ログイン画面の表示を行う -->
<template>
  <div id="authenticator">
    <div v-if="signInStatus === 'signedOut'">
      <!-- Vue - Amplify Plugin - Authentication Components -->
      <!-- https://aws-amplify.github.io/docs/js/vue#authentication-components -->
      <!-- 認証全般のコンポーネント -->
      <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
  </div>
</template>

<script>
/* Vue */
import router from '@/router'
/* Amplify */
// aws-amplify ライブラリの Auth カテゴリをインポート
import { Auth } from 'aws-amplify'
// aws-amplify-vue ライブラリの AmplifyEventBus カテゴリをインポート （イベントの発行とリッスン）
import { AmplifyEventBus } from 'aws-amplify-vue'

// 他のファイルからでも呼び出せるデフォルトの関数
export default {
  name: 'Authenticator',
  components: {},
  // Vue - Amplify Plugin - Authentication Components
  // https://aws-amplify.github.io/docs/js/vue#authentication-components
  data: function() {
    return {
      signInStatus: 'signedOut',
      authConfig: {
        // Eメールによるサインイン
        usernameAttributes: 'Email',
        signUpConfig: {
          // サインアップ時の項目を一旦全て非表示にする
          hideAllDefaults: true,
          // サインアップ時の項目
          signUpFields: [
            {
              label: 'Email',
              key: 'email',
              required: true,
              displayOrder: 1,
              type: 'string',
              signUpWith: true
            },
            {
              label: 'Name',
              key: 'name',
              required: true,
              displayOrder: 2,
              type: 'string'
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 3,
              type: 'password'
            },
          ]
        }
      }
    }
  },
  // インスタンス生成前に実行
  // https://jp.vuejs.org/v2/guide/instance.html#インスタンスライフサイクルフック
  async beforeCreate() {
    try {
      // Amplify JavaScript library - Auth Class
      // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#currentauthenticateduser
      // ログインステータスの取得
      await Auth.currentAuthenticatedUser()
      this.signInStatus = 'signedIn'
      // Vue Router による ルーティング
      router.push({path: '/'})
    } catch (err) {
      this.signInStatus = 'signedOut'
    }
    // Vue - Amplify Plugin - AmplifyEventBus
    // authStateイベント のリッスン
    // https://aws-amplify.github.io/docs/js/vue#amplifyeventbus
    AmplifyEventBus.$on('authState', info => {
      switch (info) {
        case 'signedIn':
          this.signInStatus = 'signedIn'
          router.push({path: '/'})
          break
        default:
          this.signInStatus = 'signedOut'
          break
      }
    });
  }
}
</script>

<style>
  #authenticator {
    margin: auto;
    width: 460px;
  }
</style>
