/* Vue */
import Vue from 'vue'
import router from '@/router'
import App from '@/App.vue'

/* Bootstrap Vue */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

/* Amplify */
// aws-amplify ライブラリをインポート
import Amplify, * as AmplifyModules from 'aws-amplify'
// aws-amplify-vue ライブラリの AmplifyPlugin をインポート
import { AmplifyPlugin } from 'aws-amplify-vue'
Vue.use(AmplifyPlugin, AmplifyModules)

// 自動生成された aws-exports ライブラリをインポート
import aws_exports from '@/aws-exports'
Amplify.configure(aws_exports)

// aws-amplify-vue ライブラリの components をインポート
import { components } from 'aws-amplify-vue'

// プロダクションのヒントを非表示にする
Vue.config.productionTip = false

// 多言語対応
let languageDict = {
  ja:{
      // タイトル
      'Sign in to your account' : 'サインイン',
      'Create a new account': 'アカウントの新規作成',
      'Reset your password': 'パスワードをリセット',
      'Confirm Sign Up': 'メールアドレスの認証',
      // 入力項目
      'Username' : '会社のメールアドレス',
      'Email' : '会社のメールアドレス',
      'Enter your Email' : 'メールアドレスを入力してください',
      'Name' : '名前',
      'Password' : 'パスワード',
      'Enter your password' : 'パスワードを入力してください',
      'Code': '認証コード',
      'New Password': '新しいパスワード',
      'Confirmation Code': '認証コード',
      // 注釈
      'Forget your password? ' : 'パスワードを忘れた場合は ',
      'No account? ' : 'アカウントの作成は ',
      'Have an account? ': 'サインインは ', 
      'Lost your code? ': 'メールアドレスに認証コードが届きませんか? ', 
      // ボタン
      'Back to Sign In': 'サインイン',
      'Resend Code': '認証コードを再送信する',
      'Reset password' : 'パスワードを再設定',
      'Sign in' : 'こちら',
      'Sign In' : 'サインイン',
      'Sign Out' : 'サインアウト',
      'Create account' : 'こちら',
      'Create Account' : 'アカウントを作成',
      'Send Code': '次へ進む',
      'Submit': '送信',
      'Confirm': '登録完了',
      // エラーコード
      'Username cannot be empty': 'メールアドレスを入力してください',
      'null failed with error Generate callenges lambda cannot be called..': 'パスワードを入力してください',
      'Incorrect username or password.': 'メールアドレス もしくは パスワードが正しくありません',
      'Username/client id combination not found.': 'メールアドレスが正しくありません',
      'Invalid verification code provided, please try again.': '認証コードが正しくありません',
      'Password reset required for the user': 'パスワードを再設定してください'
  }
}
AmplifyModules.I18n.putVocabularies(languageDict)

new Vue({
  render: h => h(App),
  router,
  components: {
    App,
    ...components
  }
}).$mount('#app')