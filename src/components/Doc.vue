<template>
  <div class="doc">
      <h4>课程内容</h4>
      <div>
        <component :is="{template:docHtml}" :index="this.$store.state.currentSection"></component>
      </div>

  </div>
</template>

<script>
// import vue from '@/api'
import axios from 'axios'
import SingleChoiceQuestionVue from './SingleChoiceQuestion.vue'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.vue'
import Vue from 'vue'
require('@/libs/mock.js')

Vue.component('SingleChoiceQuestionVue', SingleChoiceQuestionVue)
Vue.component('MultipleChoiceQuestion', MultipleChoiceQuestion)

const marked = require('marked')

export default {
  components: { SingleChoiceQuestionVue, MultipleChoiceQuestion },
  name: 'Doc',
  props: ['index'],
  data () {
    return {
      docHtml: '<div>Posts component</div>',
      currentSection: this.$store.state.currentSection
    }
  },
  watch: {
    index: function (newVal, oldVal) {
      this.loadDoc()
    }
  },
  mounted () {
    this.loadDoc()
  },
  methods: {
    loadDoc () {
      const url = '/course/' + this.index
      // const url = 'https://run.mocky.io/v3/730ca08c-8cd9-4145-82fb-b925b17ccf09'
      // 从mock.js 中获取数据
      axios.get(url)
        .then(response => {
          console.log(response.data)
          // markdown文档转为html
          const html = '<div>' + marked(response.data.md, { sanitize: false }) + '</div>'

          // 这里是把文稿规范里的标签替换为vue的组件
          const htmlContainer = html.replace(/<question id="107"><\/question>/g, '<SingleChoiceQuestionVue qid="107" />').replace(/<question id="108"><\/question>/g, '<MultipleChoiceQuestion qid="108" />')
          // console.log(htmlContainer)
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
</style>
