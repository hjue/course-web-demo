import Mock from 'mockjs'
import mdContentSql from '@/assets/sql.md'
import mdContentPython from '@/assets/python.md'
import { getDocToc, getSections } from '@/libs/markdown'

const courseMap = {
  python: mdContentPython,
  sql: mdContentSql
}
Mock.mock(/\/course\/\w+\/\d+/, 'get', function (options) {
  const [name, cid] = options.url.replace('/course/', '').split('/')
  return { md: getSections(courseMap[name], cid) }
})

Mock.mock(/\/toc\/\w+/, function(options) {
  const name = options.url.replace('/toc/', '')
  console.log('toc:' + name)
  return { toc: JSON.stringify(getDocToc(courseMap[name])) }
})
