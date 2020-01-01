<!-- Appコンポーネント: 全ての画面の基礎となるコンポーネント -->
<template>
  <div class="app">
    <!-- ナビゲーションバー -->
    <nav class="navbar navbar-dark" style="background-color: #ff9900;">
      <a class="navbar-brand" href="#">
        <img src="@/assets/Amplify-Logo-White.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Amplify Sample
      </a>
    </nav>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
// 他のファイルからでも呼び出せるデフォルトの関数
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-view {
  padding: 50px
}
</style>