import Mock from 'mockjs'
import mdContent from '@/assets/sql.md'
import { getDocToc, getSections } from '@/libs/markdown'

Mock.mock(/\/course\/\d+/, 'get', function (options) {
  const cid = options.url.replace('/course/', '')
  return { md: getSections(mdContent, cid) }
})

Mock.mock('/course', {
  name: '@name',

  md: mdContent
})

Mock.mock('/toc', {
  toc: JSON.stringify(getDocToc(mdContent))
})
