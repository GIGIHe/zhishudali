<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
}
.clearfix::after{
  content: '';
  clear: both;
  display: block;
  overflow: hidden;
}
.margin-auto{
    margin: 0 auto;
}
.font-size{
    font-size: 14px;
}
</style>
