<template>
  <div class="toc">
    <div>
      <Menu
        theme="light"
        active-name="1"
        @on-select="sectionClicked"
        @on-open-change="chapterClicked"
      >
        <div v-for="(menuItem, menuIndex) in menuList" :key="menuIndex">
          <Submenu name="menuIndex">
            <template slot="title">
              {{ menuItem.name }}
            </template>
            <div
              v-for="menuChildItem in menuItem.children"
              :key="menuChildItem.index"
            >
              <MenuItem :name="menuChildItem.index">{{
                menuChildItem.name
              }}</MenuItem>
            </div>
          </Submenu>
        </div>
      </Menu>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
require('@/libs/mock.js')
export default {
  name: 'Toc',
  data() {
    return {
      menuList: []
    }
  },
  methods: {
    chapterClicked(name) {
      console.log(name)
    },
    sectionClicked(name) {
      console.log('changeSection:' + name)

      this.$store.commit('changeSection', name)
    }
  },
  mounted() {
    const url = '/toc/' + this.$route.params.name
    console.log(url)
    // 从mock.js 中获取数据
    axios.get(url).then(response => {
      this.menuList = JSON.parse(response.data.toc)
    })
  }
}
</script>

<style>
.toc {
  text-align: left;
}
</style>
