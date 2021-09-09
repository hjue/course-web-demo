import Mock from 'mockjs'

Mock.mock('/course', {
  name: '@name',
  md: `

#### 题目：查询老师表获取老师信息

**考察内容：select语句用于从指定的表里提取数据并把查到的数据作为结果集返回**

**查询的数据库：sqlproject**

**查询的表：teacher**
    
---
这里是练习题1

<question id="100" />

---

老师表-teacher（样例）如下：
    
| tid | tname |
| --- | ----- |
| 1 | 张三 |
| 2 | 李四 |
    

    
**执行sql：**
    <br>
\`\`\`
    select * from sqlproject.teacher;
\`\`\`
    
   
    
**返回的结果集：**
    
| tid | tname |
| --- | ----- |
| 1 | 张三 |
| 2 | 李四 |
| 3 | 王五 |

---
这里是练习题2

<question id="100" />

---

<question id="101" />

<br/><br/>
    `
})
