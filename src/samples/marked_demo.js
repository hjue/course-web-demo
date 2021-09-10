// import { getSections } from '../libs/markdown'
var markdown = require('../libs/markdown')
var marked = require('marked')
var strMarked = `
# {resume} Resum&eacute;

## {education} Education
Educational experience

## {experience} Working Experience
Work experience

### {xyz_corp,employer} XYZ Corp.
I worked at XYZ

### {acme_inc,employer} Acme Inc.
I also worked at Acme

## Hobbies
- Cards
- Books
- Dogs

### About _my_ hobbies
My hobbies are great.

`
const renderer = {
  heading (text, level) {
    var anchor = tocObj.add(text, level)
    return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`
  }
}

const tocObj = {
  add: function (text, level) {
    var anchor = `${level}${++this.index}`
    this.toc.push({ anchor: anchor, level: level, text: text })
    return anchor
  },
  menu: function () {
    const menuList = []
    let index = 1
    this.toc.forEach(function (item) {
      if (item.level === 2) {
        menuList.push({
          name: item.text,
          index: 0,
          children: []
        })
      }
      if (item.level === 3) {
        const pnode = menuList.pop()
        pnode.children.push({
          name: item.text,
          index: index
        })
        index++
        menuList.push(pnode)
      }
    })
    return menuList
  },
  toHTML: function () {
    let result = ''
    this.toc.forEach(function (item) {
      switch (item.level) {
        case 2:
          result += item.text + '\n'
          break
        case 3:
          result += '  ' + item.text + '\n'
          break
      }
    })
    return result
  },
  sectionContent: function (index) {
    const mdContent = strMarked
    const blocks = mdContent.split(/^#{2}/mg)
    const sections = []
    for (const block of blocks) {
      if (block.length === 0) continue
      if (block.substring(0, 1) === ' ') { // h2

      } else if (block.substring(0, 2) === '# ') { // h3
        sections.push(block)
      } else {
        let pnode = ''
        if (sections.length > 0) {
          pnode = sections.pop() + '##'
          sections.push(pnode + block)
        }
      }
    }
    return sections
  },
  toc: [],
  index: 0
}

marked.use({ renderer })

marked.setOptions({
  baseUrl: null,
  breaks: false,
  extensions: null,
  gfm: true,
  headerIds: true,
  headerPrefix: '',
  highlight: null,
  langPrefix: 'language-',
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  walkTokens: null,
  xhtml: false
})

// marked(strMarked)
// console.log(tocObj.sectionContent())

const section = markdown.getSections(strMarked, 1)
console.log(section)
