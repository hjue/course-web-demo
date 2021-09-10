<template>
  <div class="code-question">
    编程题
    <p>Questin ID : {{ qid }}</p>
    <div class="code-bar" style="text-align:left">
      <span class="logo">CSDN Code Runner</span>
      <span class="language">Python</span>
      <div class="buttons">
        <Button v-on:click="runCode">Run</Button>
        <!-- <Button type="warning">Clear</Button> -->
      </div>
    </div>
    <textarea id="code" v-model="code"></textarea>
    <iframe id="console" class="CodeMirror"></iframe>
  </div>
</template>

<script>
// import vue from '@/api'
export default {
  name: 'CodeQuestion',
  props: ['qid'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.code-question {
  border: 1px solid red;
}
</style>
