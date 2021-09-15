<template>
  <div class="doc" id="write">
    <div>
      <component
        :is="{ template: docHtml }"
        :index="this.$store.state.currentSection"
      ></component>
    </div>
  </div>
</template>

<script>
// import vue from '@/api'
import axios from 'axios'
// 课程内容样式，来自typora
import '@/assets/article/typora-lark.css'
// import '@/assets/article/github.css'
import { markdownToHtml } from '@/libs/markdown'
// 代码高亮样式
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import SingleChoiceQuestionVue from './SingleChoiceQuestion.vue'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.vue'
import CodeQuestion from './CodeQuestion.vue'
import Vue from 'vue'
require('@/libs/mock.js')

Vue.component('SingleChoiceQuestionVue', SingleChoiceQuestionVue)
Vue.component('MultipleChoiceQuestion', MultipleChoiceQuestion)
Vue.component('CodeQuestion', CodeQuestion)

const marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: code => hljs.highlightAuto(code).value,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

export default {
  components: { SingleChoiceQuestionVue, MultipleChoiceQuestion, CodeQuestion },
  name: 'Doc',
  props: ['index'],
  data() {
    return {
      docHtml: '<div>Posts component</div>',
      currentSection: this.$store.state.currentSection
    }
  },
  watch: {
    index: function(newVal, oldVal) {
      this.loadDoc()
    }
  },
  mounted() {
    this.loadDoc()
  },
  methods: {
    loadDoc() {
      const url = '/course/' + this.index
      // const url = 'https://run.mocky.io/v3/730ca08c-8cd9-4145-82fb-b925b17ccf09'
      // 从mock.js 中获取数据
      axios.get(url).then(response => {
        console.log(response.data)
        // 处理markdown文档
        this.docHtml = markdownToHtml(response.data.md)
      })
    }
  }
}
</script>

<style>
.doc {
  text-align: left;
}

#write pre {
  tab-size: 2;
  white-space: pre-wrap;
}
#write code {
  display: block;
  font-size: 0.9em;
  overflow-x: auto;
  padding: 10px 5px;
  word-wrap: break-word;
  word-break: break-all;
  font-family: 'Source Code Pro', 'DejaVu Sans Mono', 'Ubuntu Mono',
    'Anonymous Pro', 'Droid Sans Mono', Menlo, Monaco, Consolas, Inconsolata,
    Courier, monospace, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.hljs ul {
  list-style: decimal;
  margin: 0 0 0 40px !important;
  padding: 0px 5px 0 0 !important;
}
.hljs li {
  list-style: decimal-leading-zero;
  border-left: 1px solid #111 !important;
  padding: 2px 5px !important;
  margin: 0 !important;
  line-height: 14px;
  width: 100%;
  box-sizing: border-box;
}
/* .hljs li:nth-of-type(even) {
  background-color: rgba(255, 255, 255, 0.015);
  color: inherit;
} */
</style>
