<template>
  <div class="doc">
      <h4>课程内容</h4>
      <div>
        <component :is="{template:docHtml}"></component>
      </div>

  </div>
</template>

<script>
// import vue from '@/api'
import axios from 'axios'
import SingleChoiceQuestionVue from './SingleChoiceQuestion.vue'
import Vue from 'vue'

Vue.component('SingleChoiceQuestionVue', SingleChoiceQuestionVue)

const marked = require('marked')

export default {
  components: { SingleChoiceQuestionVue },
  name: 'Doc',
  props: {
    msg: String
  },
  data () {
    return {
      docHtml: '<div>Posts component</div>'
    }
  },
  created () {},
  mounted () {
    axios.get('https://run.mocky.io/v3/730ca08c-8cd9-4145-82fb-b925b17ccf09')
      .then(response => {
        console.log(response.data)
        const html = '<div>' + marked(response.data.md) + '<question id=100/></div>'
        const htmlContainer = html.replace('<question id=100/>', '<SingleChoiceQuestionVue qid="100" />')
        this.docHtml = htmlContainer
      })
  },
  methods: {
  }
}
</script>

<style>
</style>
