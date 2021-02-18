<template>
<div id="app">
  <div class="auth-wrapper">
    <div class="auth-inner">
      <router-view/>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name:'App'
}
</script>

<style>
.auth-inner{
  margin-top: 15%;
  margin-left: 10%;
}
</style>