
##  1. 学习SQL能干嘛？ 

##  2. 数据库，表，SQL概念 
##  3. sql 查询mysql数据库 
###   入门—简单查询
- - -

**题目：查询老师表获取老师信息**
**考察内容：select语句用于从指定的表里提取数据并把查到的数据作为结果集返回**
**查询的数据库：sqlproject**
**查询的表：teacher**

- - -

* 老师表-teacher（样例）如下：

| tid | tname |
| --- | ----- |
| 1 | 张三 |
| 2 | 李四 |

- - -

**执行sql：**
<br>
```
select * from sqlproject.teacher;
```

- - -

**返回的结果集：**

| tid | tname |
| --- | ----- |
| 1 | 张三 |
| 2 | 李四 |
| 3 | 王五 |

<question id="107"></question>

###   入门—条件查询 

- - -

**题目：查询姓名为张三的老师信息**
**考察内容：where**<span class="colour" style="color:rgb(51, 51, 51)">**子句用于提取那些满足指定条件的记录**</span>
**查询的数据库：sqlproject**
**查询的表：teacher**

- - -

* 老师表-teacher（样例）如下：

| tid | tname |
| --- | ----- |
| 1 | 张三 |
| 2 | 李四 |

- - -

**执行sql：**
<br>
```
select * from sqlproject.teacher where tname='张三';
```

- - -

**输出结果：**

| tid | tname |
| --- | ----- |
| 1 | 张三 |
<br>
<br>

<question id="108"></question>

###   入门—MIN()函数用法 

- - -

**题目：查询课程cid=1的最低分**
**考察内容：MIN() 函数返回指定列的最小值**
**查询的数据库：sqlproject**
**查询的表：分数表sc**

- - -

* 分数表 sc

| sid | cid | score |
| --- | --- | ----- |
| 1 | 1 | 80 |
| 1 | 2 | 90 |
| 1 | 3 | 99 |

- - -

**执行sql：**
<br>
```
SELECT MIN(score) AS score from sqlproject.sc where cid=1;
```

- - -

**返回结果：**

| score |
| ----- |
| 31.0 |



<question id="111"></question>

###   入门—MAX()函数用法 

- - -

**题目：查询课程cid=1的最高分数**
**考察内容：**<span class="colour" style="color: rgb(51, 51, 51);">**MAX() 函数返回指定列的最大值**</span>
**查询的数据库：sqlproject**
**查询的表：分数表sc**

- - -

<br>
<br>
* 分数表 sc

| sid | cid | score |
| --- | --- | ----- |
| 1 | 1 | 80 |
| 1 | 2 | 90 |
| 1 | 3 | 99 |

- - -

**执行sql：**
<br>
```
SELECT MAX(score) AS score from sqlproject.sc where cid=1;
```

- - -

**返回结果：**

| score |
| ----- |
| 80.0 |



<question id="110"></question>

###   入门—COUNT()函数用法 

- - -

**题目：统计有课程cid=1考试成绩的学生数**
**考察内容：**<span class="colour" style="color: rgb(51, 51, 51);">**COUNT() 函数返回匹配指定条件的行**</span>
**查询的数据库：sqlproject**
**查询的表：分数表sc**

- - -

* 分数表 sc

| sid | cid | score |
| --- | --- | ----- |
| 1 | 1 | 80 |
| 1 | 2 | 90 |
| 1 | 3 | 99 |

- - -

**执行sql：**
<br>
```
SELECT COUNT(*) as total from sqlproject.sc where cid=1;
```

- - -

**返回结果：**

| total |
| ----- |
| 6 |

<question id="112"></question>

###   入门—SUM()函数用法 

- - -

**题目：查询课程cid=1的总分数**
**考察内容：**<span class="colour" style="color:rgb(51, 51, 51)">**SUM()函数返回数值列的总数**</span>
**查询的数据库：sqlproject**
**查询的表：分数表sc**

- - -

**分数表 sc**

| sid | cid | score |
| --- | --- | ----- |
| 1 | 1 | 80 |
| 1 | 2 | 90 |
| 1 | 3 | 99 |

- - -

**执行sql：**
<br>
```
SELECT SUM(score) AS score from sqlproject.sc where cid=1;
```

- - -

**返回结果：**

| score |
| ----- |
| 387.0 |

<question id="109"></question>

###   入门—Group By Having的用法 

- - -

**题目：查询同名同性别学生名单，并统计同名人数**
**考察内容：**<span class="colour" style="color:rgb(51, 51, 51)">**根据一个或多个列对结果集进行分组 ，HAVING 子句可以让我们筛选分组后的各组数据。**</span>
**需要库：sqlproject**
**查询的表：学生表**

- - -

* 学生表 student（样例）如下：

| sid | name | age | sex |
| --- | ---- | --- | --- |
| 1 | 赵雷 | 1990-01-01 00:00:00 | 男 |
| 2 | 钱电 | 1990-12-21 00:00:00 | 男 |
| 3 | 孙风 | 1990-05-20 00:00:00 | 男 |

- - -

**执行sql**
<br>
```
SELECT name,sex,COUNT(*) FROM sqlproject.student GROUP BY name,sex HAVING COUNT(1) > 1;
```

- - -

**输出数据展示要求：**

| name | sex | count(\*) |
| ---- | --- | -------- |
| 李四 | 女 | 2 |

<question id="94"></question>

###   入门—IN用法 

- - -

**题目：查询三个学生的信息 他们的 sid 分别为 4，5，6**
**考察内容：**<span class="colour" style="color: rgb(51, 51, 51);">**IN操作符允许在 WHERE 子句中规定多个值的筛选条件**</span>
**查询的数据库：sqlproject**
**查询的表：学生表-student**

- - -

* 学生表（样例）如下：

| sid | name | age | sex |
| --- | ---- | --- | --- |
| 1 | 赵雷 | 1990-01-01 00:00:00 | 男 |
| 2 | 钱电 | 1990-12-21 00:00:00 | 男 |
| 3 | 孙风 | 1990-05-20 00:00:00 | 男 |

- - -

**执行sql：**
<br>
```
SELECT sid,name,sex from sqlproject.student where sid in (4,5,6);
```

- - -

**返回结果：**

| sid | name | sex |
| --- | ---- | --- |
| 4 | 李云 | 男 |
| 5 | 周梅 | 女 |
| 6 | 吴兰 | 女 |

<question id="113"></question>

###   入门—like模糊匹配 

- - -

**题目：查询名字中含有"风"字的学生信息**
**考察内容：like**<span class="colour" style="color:rgb(51, 51, 51)"> **操作符用于在 WHERE 子句中搜索列中的指定数据**</span>
**查询的数据库：sqlproject**
**本题涉及一张表：学生表-student**

- - -

* 学生表（样例）如下：

| sid | name | age | sex |
| --- | ---- | --- | --- |
| 1 | 赵雷 | 1990-01-01 00:00:00 | 男 |
| 2 | 钱电 | 1990-12-21 00:00:00 | 男 |
| 3 | 孙风 | 1990-05-20 00:00:00 | 男 |

- - -

**执行sql：**
<br>
```
select sid,name,sex from sqlproject.student where name like '%风%'
```

- - -

**输出样式展示：**

| sid | name | sex |
| --- | ---- | --- |
| 3 | 孙风 | 男 |

<question id="93"></question>

###   入门—DISTINCT的用法 

- - -

**题目：过滤学生表里的重命学生**
**考察内容：**<span class="colour" style="color: rgb(51, 51, 51);">**在表中，一个列可能会包含多个重复值，DISTINCT用于返回唯一不同的值**</span>
**查询的数据库：sqlproject**
**本题涉及一张表：学生表-student**

- - -

* 学生表（节选）如下：

| sid | name | age | sex |
| --- | ---- | --- | --- |
| 1 | 赵雷 | 1990-01-01 00:00:00 | 男 |
| 10 | 李四 | 2017-12-25 00:00:00 | 女 |
| 11 | 李四 | 2017-12-30 00:00:00 | 女 |

- - -

**执行sql：**
<br>
```
SELECT DISTINCT name from student where name='李四';
```

- - -

**返回结果：**

| name |
| ---- |
| 李四 |

<question id="114"></question>

##  4. 用户画像基本分析 

###   查询指定用户的信息 

- - -

**要求：查询用户id为83551424的用户信息**
查询的数据库：sqlproject
本题涉及一张表：用户信息表-app\_user\_info
用户信息表结构：

```
CREATE TABLE `app_user_info` (
  `userid` bigint(50) NOT NULL COMMENT '用户ID',
  `register_country` varchar(100) DEFAULT NULL COMMENT '注册国家',
  `register_province` varchar(100) DEFAULT NULL COMMENT '注册省份',
  `register_city` varchar(100) DEFAULT NULL COMMENT '注册城市',
  `registertime` datetime DEFAULT NULL COMMENT '注册时间',
  `gender` varchar(100) DEFAULT NULL COMMENT '性别',
  `login_platform` varchar(100) DEFAULT NULL COMMENT '登录的平台',
  `lastlogin_country` varchar(100) DEFAULT NULL COMMENT '最后登录国家',
  `lastlogin_province` varchar(100) DEFAULT NULL COMMENT '最后登录省份',
  `lastlogin_city` varchar(100) DEFAULT NULL COMMENT '最后登录城市',
  `lastlogintime` datetime DEFAULT NULL COMMENT '最后登录时间',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

执行sql：
<br>
```
SELECT * from sqlproject.app_user_info where userid=83551424;
```

返回结果：

| userid | register\_country | register\_province | register\_city | registertime | gender | login\_platform | lastlogin\_country | lastlogin\_province | lastlogin\_city | lastlogintime |
| ------ | ---------------- | ----------------- | ------------- | ------------ | ------ | -------------- | ----------------- | ------------------ | -------------- | ------------- |
| 83551424 | 中国 | 广东 | 深圳 | 2020-07-15 13:52:00 | 男 | WAP | 中国 | 广东 | 深圳 | 2020-07-22 13:52:00 |

<question id="115"></question>



###   统计平台男女用户人数 

- - -

**要求：统计平台男女人数，未填写性别的也要统计**
查询的数据库：sqlproject
本题涉及一张表：用户信息表-app\_user\_info
用户信息表结构：

```
CREATE TABLE `app_user_info` (
  `userid` bigint(50) NOT NULL COMMENT '用户ID',
  `register_country` varchar(100) DEFAULT NULL COMMENT '注册国家',
  `register_province` varchar(100) DEFAULT NULL COMMENT '注册省份',
  `register_city` varchar(100) DEFAULT NULL COMMENT '注册城市',
  `registertime` datetime DEFAULT NULL COMMENT '注册时间',
  `gender` varchar(100) DEFAULT NULL COMMENT '性别',
  `login_platform` varchar(100) DEFAULT NULL COMMENT '登录的平台',
  `lastlogin_country` varchar(100) DEFAULT NULL COMMENT '最后登录国家',
  `lastlogin_province` varchar(100) DEFAULT NULL COMMENT '最后登录省份',
  `lastlogin_city` varchar(100) DEFAULT NULL COMMENT '最后登录城市',
  `lastlogintime` datetime DEFAULT NULL COMMENT '最后登录时间',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

执行sql：
<br>
```
SELECT gender,COUNT(*) from sqlproject.app_user_info GROUP BY gender;
```

返回结果：

| gender | count(\*) |
| ------ | -------- |
| 女 | 1296 |
| 未知 | 21362 |
| 男 | 20502 |

<question id="116"></question>

##  5. 用户增长数据分析 

###   查询 2017-11-27日平台新增用户数 

- - -

<span class="colour" style="color:rgb(64, 64, 64)">**题目：**</span>**查询 2017-11-27日平台新增用户数**
<span class="colour" style="color:rgb(64, 64, 64)">**具体指标：根据用户第一次的使用行为，查询** </span>**2017-11-27日**<span class="colour" style="color:rgb(64, 64, 64)">**平台新增用户数**</span>
**需要库：sqlproject   需要的表：t\_taobao\_order**

- - -

**t\_taobao\_order 字段解释以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```
<br>
| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |
<br>
- - -

**执行SQL：**
<br>
```
select register_time,count(user_id) from
(select user_id,from_unixtime(min(create_time),'%Y-%m-%d') as register_time from sqlproject.t_taobao_order group by user_id) as tmp where 
register_time = '2017-11-27' group by register_time;
```

**输出结果展示：**

| register\_time | count(user\_id) |
| ------------- | -------------- |
| 2017-11-27 | 10488 |

<question id="117"></question>

###   平台每日新增用户查询 

- - -

<span class="colour" style="color:rgb(64, 64, 64)">**题目：查看平台每日新增用户数**</span>
<span class="colour" style="color:rgb(64, 64, 64)">**具体指标：根据用户第一次的使用行为，查询平台日新增用户数**</span>
**需要的库：sqlproject**
           **表：t\_taobao\_order**

- - -

**t\_taobao\_order column字段含义以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```
<br>
| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 |  |

- - -

**执行SQL：**
<br>
```
select register_time,count(user_id) from 
(select user_id,from_unixtime(min(create_time),'%Y-%m-%d') as register_time from sqlproject.t_taobao_order group by user_id) as tmp
group by register_time order by register_time desc ;
```

- - -

**输出结果展示：**

| <span class="highlight" style="background-color:rgb(255, 255, 255)"><span class="colour" style="color:rgb(102, 102, 102)">**<span class="font" style="font-family:&quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif"><span class="size" style="font-size:small">register\_time</span></span>**</span></span> | count(user\_id) |
| ------------- | -------------- |
| 2017-11-30 | 3260 |
| 2017-11-29 | 4483 |
| 2017-11-28 | 6521 |
| 2017-11-27 | 10488 |
| 2017-11-26 | 20359 |
| 2017-11-25 | 46575 |
| 2017-11-24 | 398 |
| 2017-11-23 | 41 |
| 2017-11-22 | 10 |
| 2017-11-21 | 9 |
| 2017-11-20 | 6 |
| 2017-11-19 | 10 |
| 2017-11-18 | 5 |
| 2017-11-17 | 1 |
| 2017-11-16 | 1 |
| 2017-11-14 | 1 |
| 2017-11-12 | 1 |
| 2017-11-11 | 2 |
| 2017-11-03 | 2 |
| 2017-11-01 | 1 |

<question id="66"></question>

##  6. 用户活跃数据分析 

###   活跃用户分析uv,pv计算 

- - -

<span class="colour" style="color:rgb(64, 64, 64)">**题目要求：查询平台用户每天的uv ,pv 人均访问页面数**</span>
**数据库：sqlproject   表：t\_taobao\_order**
**人均访问页面数：pv/uv**

- - -

**t\_taobao\_order column字段含义以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```
<br>
| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |
<br>
- - -

执行sql：

```
select
    from_unixtime(create_time,'%Y-%m-%d') as timeday,
    count(case when behavior_type = 'pv' then 1 end) as pv,
    count(distinct user_id) as uv,count(case when behavior_type = 'pv' then 1 end)/count(distinct user_id) as pv_uv
    from sqlproject.t_taobao_order
    group by from_unixtime(create_time,'%Y-%m-%d') order by create_time desc
```

- - -

输出数据展示：

| 日期 | 日uv | 日pv | 人均访问页面数 |
| --- | --- | --- | ------- |
| 2017-12-01 | 2 | 2 | 1 |
| 2017-11-30 | 92974 | 48633 | 1.9117 |
| 2017-11-29 | 91332 | 47826 | 1.9097 |
| 2017-11-28 | 88252 | 46748 | 1.8878 |
| 2017-11-27 | 89879 | 46881 | 1.9172 |
| 2017-11-26 | 94993 | 48016 | 1.9784 |
| 2017-11-25 | 93148 | 46776 | 1.9914 |
| 2017-11-24 | 406 | 400 | 1.015 |
| 2017-11-23 | 49 | 42 | 1.1667 |
| 2017-11-22 | 11 | 11 | 1 |
| 2017-11-21 | 9 | 9 | 1 |
| 2017-11-20 | 7 | 6 | 1.1667 |
| 2017-11-19 | 10 | 10 | 1 |
| 2017-11-18 | 7 | 6 | 1.1667 |
| 2017-11-17 | 2 | 2 | 1 |
| 2017-11-16 | 2 | 2 | 1 |
| 2017-11-14 | 1 | 1 | 1 |
| 2017-11-12 | 3 | 2 | 1.5 |
| 2017-11-11 | 2 | 2 | 1 |
| 2017-11-04 | 1 | 1 | 1 |
| 2017-11-03 | 7 | 2 | 3.5 |
| 2017-11-01 | 1 | 1 | 1 |

<question id="67"></question>

###   查看平台用户活跃时间段 

- - -

<span class="colour" style="color:rgb(64, 64, 64)">**题目要求：按小时查看用户行为，查看用户**</span>behavior\_type 总数，pv 总数，fav 总数，cart总数，buy总数
**数据库：sqlproject   表：t\_taobao\_order**
**知识点：时间函数使用 转小时：from\_unixtime(create\_time,'%H');**

- - -

**t\_taobao\_order column字段含义以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```
<br>
| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |
<br>
- - -

执行sql：

```
select from_unixtime(create_time,'%H') as hours,
count(1) as '该时刻的总数',
sum(case when behavior_type='pv' then 1 else 0 end) as'pv',
sum(case when behavior_type='buy' then 1 else 0 end) as'buy',
sum(case when behavior_type='cart' then 1 else 0 end) as'cart',
sum(case when behavior_type='fav' then 1 else 0 end) as'fav'
from sqlproject.t_taobao_order 
group by from_unixtime(create_time,'%H');
```

- - -

输出数据展示：

| hours | 该时刻的总数 | pv | buy | cart | fav |
| ----- | ------ | --- | --- | ---- | --- |
| 00 | 20102 | 17993 | 350 | 1094 | 665 |
| 01 | 9131 | 8209 | 129 | 499 | 294 |
| 02 | 4962 | 4463 | 73 | 257 | 169 |
| 03 | 3496 | 3149 | 38 | 200 | 109 |
| 04 | 3017 | 2690 | 42 | 174 | 111 |
| 05 | 3964 | 3575 | 38 | 227 | 124 |
| 06 | 8618 | 7731 | 108 | 517 | 262 |
| 07 | 15321 | 13766 | 208 | 857 | 490 |
| 08 | 21037 | 18810 | 406 | 1122 | 699 |
| 09 | 26128 | 23356 | 593 | 1360 | 819 |
| 10 | 30325 | 26981 | 761 | 1650 | 933 |
| 11 | 29187 | 25928 | 763 | 1559 | 937 |
| 12 | 29741 | 26436 | 744 | 1644 | 917 |
| 13 | 33216 | 29610 | 838 | 1758 | 1010 |
| 14 | 32303 | 28859 | 753 | 1757 | 934 |
| 15 | 33254 | 29749 | 746 | 1796 | 963 |
| 16 | 32049 | 28661 | 761 | 1705 | 922 |
| 17 | 28562 | 25516 | 620 | 1570 | 856 |
| 18 | 29167 | 26186 | 600 | 1570 | 811 |
| 19 | 37348 | 33624 | 785 | 1978 | 961 |
| 20 | 44970 | 40573 | 825 | 2439 | 1133 |
| 21 | 51364 | 46198 | 923 | 2864 | 1379 |
| 22 | 50887 | 45617 | 888 | 2979 | 1403 |
| 23 | 37680 | 33418 | 620 | 2445 | 1197 |

<question id="118"></question>

###   用户流量去哪了 

- - -

<span class="colour" style="color:rgb(64, 64, 64)">**题目要求：统计平台每日用户的 pv 总次数，购买总次数，cart 行为总次数，buy 购买行为总次数**</span>
**需要的库：sqlproject 表：t\_taobao\_order**

- - -

**t\_taobao\_order column字段含义以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```
<br>
| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |

- - -

**执行SQL：**

```
select
from_unixtime(create_time, '%Y-%m-%d') as '日期',
count(1) as '行为总数',
count( case when behavior_type = 'pv' then 1 end ) as 'pv',
count( case when behavior_type = 'buy' then 1 end ) as 'buy',
count( case when behavior_type = 'cart' then 1 end ) as 'cart',
count( case when behavior_type = 'fav' then 1 end ) as 'fav'
from
sqlproject.t_taobao_order
group by
from_unixtime(create_time, '%Y-%m-%d')
order by
from_unixtime(create_time, '%Y-%m-%d') desc
```

- - -

**执行结果如下：**

| 日期 | 行为总数 | pv | buy | cart | fav |
| --- | ---- | --- | --- | ---- | --- |
| 2017-12-01 | 2 | 2 | 0 | 0 | 0 |
| 2017-11-30 | 103872 | 92974 | 2140 | 5741 | 3017 |
| 2017-11-29 | 102121 | 91332 | 2144 | 5610 | 3035 |
| 2017-11-28 | 98814 | 88252 | 2176 | 5452 | 2934 |
| 2017-11-27 | 100415 | 89879 | 2129 | 5420 | 2987 |
| 2017-11-26 | 106331 | 94993 | 2067 | 6081 | 3190 |
| 2017-11-25 | 103756 | 93148 | 1956 | 5717 | 2935 |
| 2017-11-24 | 406 | 406 | 0 | 0 | 0 |
| 2017-11-23 | 49 | 49 | 0 | 0 | 0 |
| 2017-11-22 | 11 | 11 | 0 | 0 | 0 |
| 2017-11-21 | 9 | 9 | 0 | 0 | 0 |
| 2017-11-20 | 7 | 7 | 0 | 0 | 0 |
| 2017-11-19 | 10 | 10 | 0 | 0 | 0 |
| 2017-11-18 | 7 | 7 | 0 | 0 | 0 |
| 2017-11-17 | 2 | 2 | 0 | 0 | 0 |
| 2017-11-16 | 2 | 2 | 0 | 0 | 0 |
| 2017-11-14 | 1 | 1 | 0 | 0 | 0 |
| 2017-11-12 | 3 | 3 | 0 | 0 | 0 |
| 2017-11-11 | 2 | 2 | 0 | 0 | 0 |
| 2017-11-04 | 1 | 1 | 0 | 0 | 0 |
| 2017-11-03 | 7 | 7 | 0 | 0 | 0 |
| 2017-11-01 | 1 | 1 | 0 | 0 | 0 |
<br>
<br>

<question id="68"></question>

##  7. 用户复购数据分析 

###   查询平台复购的用户 

**题目要求：从订单数据中找出来10个 购买次数>=2 的用户，统计她们的购买次数**
**复购用户：购买次数>=2 的用户**
**需要的库：sqlproject**
           **表：t\_taobao\_order**

- - -

**t\_taobao\_order column字段含义以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```
<br>
| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |

- - -

**执行SQL；**

```
select user_id,count(1) as '购买次数'
from sqlproject.t_taobao_order where behavior_type='buy'
group by user_id
having count(behavior_type) >=2 limit 10
```

- - -

执行结果：

| user\_id | 购买次数 |
| ------- | ---- |
| 122 | 2 |
| 192 | 2 |
| 470 | 2 |
| 1192 | 2 |
| 1249 | 3 |
| 2142 | 2 |
| 2671 | 2 |
| 3304 | 2 |
| 3981 | 2 |
| 3982 | 2 |

<question id="119"></question>

##  8. 用户转化数据分析 

###   购物车转化率 

<span class="colour" style="color:rgb(64, 64, 64)">**题目：**</span>****统计电商平台订单表，获取购物车转订单的转化率****
<span class="colour" style="color:rgb(64, 64, 64)">**具体指标：计算**</span>****购物车转订单的比率****
**需要库：sqlproject   需要的表：t\_taobao\_order**

- - -

**t\_taobao\_order 字段解释以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```

- - -

| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |

- - -

**执行SQL：**
<br>
```
select concat(cast(
(select count(1) from sqlproject.t_taobao_order where behavior_type='cart')/
(select count(1) from sqlproject.t_taobao_order where behavior_type='pv')*100 as Decimal(18,2)),'%') as '购物车转化率' from t_taobao_order limit 1 ;
```

- - -

**输出结果展示：**

| 购物车转化率 |
| ------ |
| 6.21% |

<question id="120"></question>

###   收藏转化率 

<span class="colour" style="color:rgb(64, 64, 64)">**题目：**</span>****统计电商平台订单表，获取收藏转订单的转化率****
<span class="colour" style="color:rgb(64, 64, 64)">**具体指标：计算收藏**</span>****转订单的比率****
**需要库：sqlproject   需要的表：t\_taobao\_order**

- - -

**t\_taobao\_order 字段解释以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```

- - -

| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |

- - -

**执行SQL：**
<br>
```
select concat(cast(
(select count(1) from sqlproject.t_taobao_order where behavior_type='fav')/
(select count(1) from sqlproject.t_taobao_order where behavior_type='pv')*100 as Decimal(18,2)),'%') as '收藏转化率' from t_taobao_order limit 1 ;
```

- - -

**输出结果展示：**

| 购物车转化率 |
| ------ |
| 3.28% |

<question id="121"></question>

###   购买转化率 

<span class="colour" style="color:rgb(64, 64, 64)">**题目：**</span>****统计电商平台订单表，获取购物车转订单的转化率****
<span class="colour" style="color:rgb(64, 64, 64)">**具体指标：计算**</span>****购物车转订单的比率****
**需要库：sqlproject   需要的表：t\_taobao\_order**

- - -

**t\_taobao\_order 字段解释以及样例数据如下：**
<br>
```
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) DEFAULT NULL COMMENT '用户ID',
  `item_id` int(20) DEFAULT NULL COMMENT '商品ID',
  `behavior_type` varchar(10) DEFAULT NULL COMMENT 'pv:点击，fav:喜欢收藏，cart，加入购物车，buy:购买',
  `item_category` int(11) DEFAULT NULL COMMENT '品类ID，商品所属的品类',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
```

- - -

| id | user\_id | item\_id | behavior\_type | item\_category | create\_time |
| --- | ------- | ------- | ------------- | ------------- | ----------- |
| 10 | 1 | 1531036 | pv | 2920476 | 1511733732 |
| 20 | 1 | 4615417 | pv | 4145813 | 1511870864 |
| 30 | 1 | 4973305 | pv | 2520771 | 1511969365 |
| 60 | 100 | 1220136 | pv | 4869428 | 1511550908 |
| 70 | 100 | 2971043 | fav | 4869428 | 1511565222 |
| 80 | 100 | 4848310 | pv | 2881542 | 1511684220 |
| 90 | 100 | 2758020 | pv | 2429887 | 1511742275 |
| 100 | 100 | 5153036 | pv | 2342116 | 1511758581 |
| 110 | 100 | 4492008 | pv | 4482016 | 1511766135 |
| 120 | 100 | 1046201 | buy | 3002561 | 1511767298 |

- - -

**执行SQL：**
<br>
```
select concat(cast(
(select count(1) from sqlproject.t_taobao_order where behavior_type='cart')/
(select count(1) from sqlproject.t_taobao_order where behavior_type='pv')*100 as Decimal(18,2)),'%') as '购物车转化率' from t_taobao_order limit 1 ;
```

- - -

**输出结果展示：**

| 购物车转化率 |
| ------ |
| 6.21% |

<question id="122"></question>