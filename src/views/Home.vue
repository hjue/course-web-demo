<template>
  <div class="home">
    <div>
      <p>
        <router-link to="/course/sql">SQL实战数据分析</router-link>
      </p>
      <p>
        <router-link to="/course/sql">Python编程基础</router-link>
      </p>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
