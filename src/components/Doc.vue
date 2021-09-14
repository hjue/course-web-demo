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
        // markdown文档转为html
        const html = '<div>' + marked(response.data.md) + '</div>'

        // 这里是把文稿规范里的标签替换为vue组件
        let htmlContainer = html.replace(
          /<question id="108"><\/question>/g,
          '<MultipleChoiceQuestion qid="108" />'
        )
        htmlContainer = htmlContainer.replace(
          /<question id="111"><\/question>/g,
          '<CodeQuestion qid="111" />'
        )
        htmlContainer = htmlContainer.replace(
          /<question id="(\d+)"><\/question>/g,
          '<SingleChoiceQuestionVue qid="$1" />'
        )
        // htmlContainer = htmlContainer.replace(/<question id="(\d+)"><\/question>/g, '<SingleChoiceQuestionVue qid="$1" />')
        // console.log(htmlContainer)
        // 处理代码高亮
        htmlContainer = htmlContainer.replace(/<pre>/g, "<pre class='hljs'>")
        this.docHtml = htmlContainer
      })
    }
  }
}
</script>

<style>
.doc {
  text-align: left;
}
#write code {
  display: inline-block;
  width: 98%;
  padding: 10px 10px 10px 10px;
  font-size: 0.9em;
  word-wrap: break-word;
  word-break: normal;
}
</style>
