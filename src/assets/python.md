## Python简介及环境安装

### Python 简介

Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。

简单来说，Python是一门编程语言，帮助我们更好的与计算机沟通，功能全面、易学易用、可拓展语言，所以说，人生苦短，我学Python。

Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。

- `Python 是一种解释型高级语言:` 这意味着开发过程中没有了编译这个环节。类似于PHP和Perl语言。
- `Python 是交互式语言:` 这意味着，您可以在一个Python提示符，直接互动执行写你的程序。
- `Python 是面向对象语言:` 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。
- `Python 是初学者的语言:` Python 对初级程序员而言，是一种伟大的语言，开发代码量少，模块扩展库种类繁多，所以它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。

##### 扩展：编译型与解释型的原理

- 编译型：编译器将源代码逐条编译成机器代码，任何一条语句 有错，都不能通过编译，最终形成目标代码，以后每次执行只执 行目标代码即可，因此执行速度快。
- 解释型：解释器逐条解释源代码，成功一条就执行一 条，每次执行时都需要解释，所以速度稍慢 

### Python发展历史

- Python的作者是荷兰人Guido von Rossum（龟叔）
- 1982年，Guido从阿姆斯特丹大学(University of  Amsterdam)获得了数学和计算机硕士学位。然而，尽管他算得上是一位数学家，但他更加享受计算机带来的乐趣。用他的话说，尽管拥有数学和计算机双料资质，他总趋向于做计算机相关的工作，并热衷于做任何和编程相关的活儿。
- 1989年，为了打发圣诞节假期，Guido开始写Python语言的编译/解释器。Python来自Guido所挚爱的电视剧Monty  Python's Flying Circus  (BBC1960-1970年代播放的室内情景幽默剧，以当时的英国生活为素材)。他希望这个新的叫做Python的语言，能实现他的理念(一种C和shell之间，功能全面，易学易用，可拓展的语言)。Guido作为一个语言设计爱好者，已经有过设计语言的(不很成功)的尝试。这一次，也不过是一次纯粹的hacking行为。
- Python正式诞生于1991年
- Python目前有两个版本，Python2和Python3，代码不完全兼容
- 源文件.py文件猴后缀名
- Python的解释器如今有多个语言实现，通常用的是Cpython或者IPython（官方版本的C语言实现），其他还有Jpython（Java平台）、IronPython（NET和Mono平台）、PyPy（Python实现）

##### 扩展：Python2还是Python3

- py2.7是2.x系列的最后一个版本，已经停止开发，不再增加新功能。2020年终止支持。所有的最新的标准库的更新改进，只会在3.x的版本里出现。Guido决定清理Python2.x ，并且不再兼容旧版本
- 最大的一个改变就是使用Unicode作为默认编码。Pyhton2.x中直接写中文会报错，Python3中可以直接写中文了。从开源项目看，支持py3的比例已经大大提高，知名的项目一般都支持py2.7和py3+
- py3比py2更规范统一、去掉了没必要的关键字Python3.x还在持续改进
- 所以我们还是推荐大家使用Python3.x

### Python的安装与使用

#### Python环境搭建

- Python可应用于多平台包括Windows、 Linux/Unix 和 Mac OS。

- Python有不同的搭建环境包括Python解释器(CPython)、编辑器(IDLE，PyCharm，Sublime Text)、Python软件包管理系统(pip)

#### 软件下载

- Python最新源码，解释器环境等最新下载 

  Python官网:[http://www.python.org/](http://www.python.org/) 

- Python 权威使用技术文档等最新下载 

  Python文档下载地址:[http://www.python.org/doc/](http://www.python.org/doc/)

#### Unix & Linux 平台安装 Python:(源码式安装)

- 以下为在Unix & Linux 平台上安装 Python 的简单步骤：
  - 打开WEB浏览器访问[http://www.python.org/download/](http://www.python.org/download/)
  - 选择适用于Unix/Linux的源码压缩包。
  - 下载及解压压缩包。
  - 执行 ./configure 脚本
  - make
  - make install
- 执行以上操作后，Python会安装在 /usr/local/bin 目录中，Python库安装在/usr/local/lib/pythonXX，XX为你使用的Python的版本号。

#### 通过ubuntu官方的apt工具包安装

```
   $ sudo apt-get install python   
   $ sudo apt-get install python3.8
```

#### Mac安装Python3

```
   $ brew search python
   $ brew install python3
```

#### windows下直接安装

访问[http://www.python.org/download/](http://www.python.org/download/) 下载最新的Python环境


下载后，双击安装,选择“Install Now”默认安装，但一定勾选“Add Python xx to PATH”



![](https://docs.python.org/zh-cn/3/_images/win_installer.png)


### Python的运行

#### 运行Python的三种方式

1. 交互式解释器

2. 命令行运行Python源代码 

   >  使用编辑器或集成开发环境（IDE）运行Python，本质也是命令行运行Python源代码

#### 交互式解释器

- 你可以通过命令行窗口进入python并开在交互式解释器中开始编写Python代码。
- 你可以在Unix，DOS或任何其他提供了命令行或者shell的系统进行python编码工作。

```python
$ python # Unix/Linux/MacOS 
或者 
C:>python # Windows/DOS
```

使用`python -h`获得帮助文档，以下为Python命令行参数：

| 选项   | 描述                                            |
| ------ | ----------------------------------------------- |
| -d     | 在解析时显示调试信息                            |
| -O     | 生成优化代码 ( .pyo 文件 )                      |
| -S     | 启动时不引入查找Python路径的位置                |
| -V     | 输出Python版本号                                |
| -c cmd | 执行 Python 脚本，并将运行结果作为 cmd 字符串。 |
| file   | 在给定的python文件执行python脚本。              |

#### 命令行脚本

- 在记事本中输入下列代码，另存为test.py文件 

```python
word = 'Hello Python!'
print(word)
```

- 在命令行中执行Python脚本，如下所示：

```python
$ python test.py # Unix/Linux/MacOS 
或者 
C:>python test.py # Windows/DOS
```

>保存test.py文件时，请选用utf-8编码
>
>windows下在文件资源管理器地址栏中键入`cmd`可直接进入当前目录的命令行环境
>
>执行Python脚本后，命令行中显示`Hello Python!`，表明Python脚本运行成功
>
>







###  Python基础语法

#### Python 注释

#### Python中的注释有单行注释和多行注释：

- python中单行注释采用 # 开头。

```python
# 文件名：test.py

# 第一个注释
print("Hello, Python!")  # 第二个注释
```

输出结果：

```python
Hello, Python!
```

注释可以在语句或表达式行末：

```python
name = "Madisetti" # 这是一个注释
```

python 中多行注释使用三个单引号(''')或三个双引号(""")。

```python
# 文件名：test.py
'''这是多行注释，使用单引号。这是多行注释，使用单引号。这是多行注释，使用单引号。'''

"""这是多行注释，使用双引号。这是多行注释，使用双引号。这是多行注释，使用双引号。"""
```



#### Python语法格式-缩进

- python最具特色的就是使用缩进来表示代码块，不需要使用大括号({})。
- 缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。
- 缩进强迫大家写出格式化的代码 
- 当语句以’:’结尾时，缩进的语句视为代码块 
- 约定俗成管理，4个空格为一个缩进 
- Python大小写敏感 

实例如下：

```python
if True:    
  print ("True")
else:
  print ("False")
```

- 以下代码最后一行语句缩进数的空格数不一致，会导致运行错误：

```python
if True:    
  print ("Answer")    
  print ("True")
else:    
  print ("Answer")  
    print ("False")    # 缩进不一致，会导致运行错误
```

- 以上程序由于缩进不一致，执行后会出现类似以下错误：

```python
 File "test.py", line 6    print ("False")    # 缩进不一致，会导致运行错误                                      ^IndentationError: unindent does not match any outer indentation level
```

##### 多行语句

- Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠(\\)来实现多行语句，例如：

```python
total = item_one + \
  item_two + \
  item_three
  
# 以上语句和下面的语句等价
total = item_one + item_two + item_three
```

- 在 [], {}, 或 () 中的多行语句，不需要使用反斜杠()，例如：

```python
total = ['item_one', 
         'item_two', 
         'item_three',        
         'item_four', 
         'item_five']
```

##### 空行

- 函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。
- 空行与代码缩进不同，空行并不是Python语法的一部分。书写时不插入空行，Python解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。
- 记住：空行也是程序代码的一部分。





### 课程测试


<question id=1590></question>


<question id=1591></question>


<question id=1592></question>


<question id=1593></question>


<question id=1594></question>


<question id=1595></question>


<question id=1596></question>

<question id=1597></question>