var marked = require('marked')

// const BREAK_LINE_REGEXP = /\r\n|\r|\n/g
const tocObj = {
  mdContent: '',
  add: function (text, level) {
    var anchor = `${level}${++this.index}`
    this.toc.push({ anchor: anchor, level: level, text: text })
    return anchor
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
    const blocks = this.mdContent.split(/^#{2}/mg)
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
  menu: function () {
    const menuList = []
    let index = 0
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
    // console.dir(menuList)
    return menuList
  },
  toc: [],
  index: 0
}

const renderer = {
  heading (text, level) {
    var anchor = tocObj.add(text, level)
    return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`
  }
}

function setMarkedOptions() {
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
}

function getDocToc (mdContent) {
  tocObj.toc = []
  setMarkedOptions()
  tocObj.mdContent = mdContent
  console.log(tocObj)
  marked(mdContent)
  return tocObj.menu()
}

function getSections (mdContent, index) {
  // marked(mdContent)
  tocObj.mdContent = mdContent
  const sections = tocObj.sectionContent()
  return sections[index]
}

function markdownToHtml(mdContent) {
  // markdown文档转为html
  const html = '<div>' + marked(mdContent) + '</div>'

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
  // 高亮增加行号
  // htmlContainer = htmlContainer.replace(/<code\s+((.|[\r\n])*)<\/code>/mg, (item, index) => {
  //   // item 替换元素，index 替换元素的下标
  //   const BREAK_LINE_REGEXP = /\r\n|\r|\n/g
  //   const matchedItem = item.match(/(<code\s+[^>]*>)((.|[\r\n])*)<\/code>/m)
  //   let ret = `${matchedItem[1]}<ul><li>
  //       ${matchedItem[2].replace(BREAK_LINE_REGEXP, '\n</li><li>')}</li></ul></code>`
  //   ret = ret.replace('<li></li></ul>', '</ul>')
  //   return ret
  // })
  return htmlContainer
}
module.exports = { getSections, getDocToc, markdownToHtml }
