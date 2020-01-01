<template>
  <div id="main">
    <!--  

      チャットサンプル

    -->
    <h3>Chat Sample</h3>
    <section>
      <!--  table による 要素一覧 の表示

            Vue - Amplify Plugin - Connect Components
            https://aws-amplify.github.io/docs/js/vue#connect
            
            :query="listChatsQuery"
              + listChatsQuery() を実行する
                + graphqlOperation(ListChatsQuery)を実行する
                + loading, data, errors が返却される
                + 取得できない場合は、 No query, mutation, or subscription was specified エラーが発生する 
            
            :subscription="createChatSubscription"
              + createChatSubscription() を実行する
                + graphqlOperation(OnCreateChatSubscription)を実行する

            :onSubscriptionMsg="onCreateChat"
              + data.listChats にデータを追加する    
  
      -->
      <amplify-connect :query="listChatsQuery" :subscription="createChatSubscription" :onSubscriptionMsg="onCreateChat">>
        <template slot-scope="{loading, data, errors}">
          <!-- 'loading' = true のとき -->
          <div v-if="loading">Loading...</div>
          <!-- 'errors' に値があるとき -->
          <div v-else-if="errors.length > 0"></div>
          <!-- 'data' に値があるとき -->
          <div v-else-if="data">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Name</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in data.listChats.items" v-bind:key="item">
                <tr>
                  <th scope="row">{{ (index+1) }}</th>
                  <td>{{ item.createdAt }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.message }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </amplify-connect>
    </section>
    <section>
      <!--  input による データの追加

            Vue - Amplify Plugin - Connect Components
            https://aws-amplify.github.io/docs/js/vue#connect
            
            :mutation="createChatMutation"
              + createChatMutation() を実行する
                + graphqlOperation(CreateChatMutation)を実行する
                + loading, mutate, errors が返却される
            
            @done="onCreateFinished"
              + :mutation="createChatMutation" 完了時に onCreateFinished() を実行する
      
      -->
      <amplify-connect :mutation="createChatMutation" @done="onCreateFinished">
        <template slot-scope="{loading, mutate}">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="message">Message</span>
            </div>
            <input v-model="chat.message" type="text" class="form-control" placeholder="your message here" aria-label="message" aria-describedby="message">
          </div>
          <!-- ボタンクリック時に mutate メソッドを実行する -->
          <button type="button" class="btn btn-primary" :disabled="disableChatSubmitButton(loading)" @click="mutate">Save</button>
        </template>
      </amplify-connect>
    </section>
    <section>
      <div v-if="signInStatus === 'signedIn'">
        <amplify-sign-out></amplify-sign-out>
      </div>
    </section>
  </div>
</template>

<script>
/* Amplify */
// aws-amplify ライブラリの Auth モジュールをインポート
import { Auth } from "aws-amplify" 
// aws-amplify-vue ライブラリの AmplifyEventBus モジュールをインポート （イベントの発行とリッスン）
import { AmplifyEventBus } from 'aws-amplify-vue' 
// GraphQL Query 
import * as mutations from '@/graphql/mutations'; 
import * as queries from '@/graphql/queries'; 
import * as subscriptions from '@/graphql/subscriptions'; 

// ロガー設定
// ログを有効化する場合は、以下のコメントアウトを外す

/*
import { Logger } from "aws-amplify"
// グローバルのロギングレベル（=DEBUG）
Logger.LOG_LEVEL = 'DEBUG';
// インスタンスのロギングレベル（=INFO）
// グローバルのロギングレベルが優先される（=DEBUG）
const logger = new Logger('amplify-logger', 'INFO');
*/

export default { 
  name: 'Amplify Demo', 
  // 使用するコンポーネント 
  components: {}, 
  computed: {
    // 引数を伴う Computed Propety
    disableChatSubmitButton: function() {
      return function(loading) {
        return loading || !this.chat.message;
      }
    },
    // createChat クエリの実行
    createChatMutation() {
      //logger.info('createChat');

      var date = new Date();
      var createdAt = date.getTime();

      // 'src/graphql.mutations.js' にて定義されたクエリ
      return this.$Amplify.graphqlOperation(mutations.createChat, {input: 
        // クエリに代入する値
        {
          userId: this.user.username,
          createdAt: createdAt,
          name: this.user.attributes.name, 
          message: this.chat.message
        }
      });
    },
    // listChats クエリの実行
    listChatsQuery() {
      //logger.info('listChatsQuery');
      return this.$Amplify.graphqlOperation(queries.listChats);
    },
    // onCreateChat の実行
    createChatSubscription() {
      //logger.info('createChatSubscription');
      return this.$Amplify.graphqlOperation(subscriptions.onCreateChat);
    }
  },
  methods: {
    // createChatMutation() 実行完了後に呼び出し
    onCreateFinished() {
      //logger.info('onCreateFinished');
    },
    // Subscription メッセージ受信時に呼び出し
    onCreateChat(prevData, newData) {
      //logger.info('onCreateChat');
      const newChat = newData.onCreateChat;
      prevData.data.listChats.items.push(newChat);
      return prevData.data;
    }
  },
  // データ 
  data () { 
    // 必ず初期値が必要 
    return { 
      user: {
        username: '',
        attributes: {
          name: ''
        }
      },
      signInStatus: 'signedOut',
      chat: {
        message: ''
      },
      item: {
        itemId: '',
        status: 0,
        attributes: {
          name: '',
          description: ''
        }
      }
    } 
  },
  async beforeCreate() { 
    try { 
      // Amplify JavaScript library - Auth Class
      // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#currentauthenticateduser
      // ログインステータスの取得
      this.user = await Auth.currentAuthenticatedUser() 
      this.signInStatus = 'signedIn' 
    } catch (err) { 
      this.signInStatus = 'signedOut'
    } 
    AmplifyEventBus.$on('authState', info => { 
      switch (info) { 
        case 'signedIn': 
          this.signInStatus = 'signedIn' 
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
h1, h2, h3, h4, h5 {
  margin-bottom: 20px
}
section {
  margin-bottom: 50px
}
</style>