<template>
  <div class="multiple-choice-question">
    多选题
    <p>Questin ID : {{qid}}</p>
    <div style="text-align:left">
    <p>如果我们想要让一张表与N张表动态的创建Foreign关系，那么我们可以通过Django的ContentType组件的哪两个字段做Foreign关系（）。</p>
    <CheckboxGroup  vertical>

        <p>
          <Checkbox label="apple">
              <Icon type="social-apple"></Icon>
              <span>A. GenericForeignKey, GenericRelation</span>
          </Checkbox>
        </p>
        <p>
          <Checkbox label="android">
              <Icon type="social-android"></Icon>
              <span>B. GenericForeignKey,pricepolicy</span>
          </Checkbox>
        </p>
        <p>
          <Checkbox label="windows">
              <Icon type="social-windows"></Icon>
              <span>C. GenericRelation，pricepolicy</span>
          </Checkbox>
        </p>
        <p>
          <Checkbox label="windows">
              <Icon type="social-windows"></Icon>
              <span>D. 都不可以</span>
          </Checkbox>
        </p>
    </CheckboxGroup>

    </div>
  </div>
</template>

<script>
// import vue from '@/api'
export default {
  name: 'MultipleChoiceQuestion',
  props: ['qid'],
  data () {
    return {}
  },
  created () {},
  methods: {
  }
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
</style>
