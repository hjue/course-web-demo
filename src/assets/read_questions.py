import re
import time


def parse_question(file):
    lines = open(file).readlines()
    qindex = 0
    questions = []
    qobj = {}

    question_type = {'单选题': 12, '多选题': 13, '填空题': 11}
    question_level = {'简单': 1, '中等': 2, '困难': 3}
    for i, line in enumerate(lines):
        # 题目第一行
        line = line.strip()
        if len(line.strip()) == 0:
            qindex = 0
            if qobj:
                questions.append(qobj)
            qobj = {}
        if line.endswith(')') and line.startswith('(') and qindex == 1:

            # 新建题目对象，分析第一行
            for opt in re.findall(r'\([^)]*\)', line):

                item = opt[1:-1].split(':')

                if item[0].strip() == '答案':
                    qobj['答案'] = item[1].strip().replace(',', '|')
                if item[0].strip() == '题型':
                    qobj['题型'] = question_type[item[1].strip()]
                if item[0].strip() == '难度':
                    qobj['难度'] = question_level[item[1].strip()]
                if item[0].strip() == '解析':
                    qobj['解析'] = item[1].strip()
        # 标题
        if qindex == 2:
            qobj['title'] = line
            qobj['description'] = ''
        if qindex > 2 and line[0] >= 'A' and line[0] <= 'Z':
            qobj['description'] += line+'\n'
        qindex += 1
    return questions


def make_sql(questions):
    table_name = 't_question'
    fields = ['title', 'description', 'level',
              'create_time', 'update_time',
              'question_type', 'need_pay',
              'analysis', 'status', 'author_id']
    for question in questions:

        question['description'] = question['description'].replace('\n', r'\n')
        question['level'] = question['难度']
        question['create_time'] = int(round(time.time() * 1000))
        question['update_time'] = int(round(time.time() * 1000))
        question['question_type'] = question['题型']
        question['need_pay'] = 0
        question['status'] = 1
        question['author_id'] = 1
        question['analysis'] = ''
        if '答案' in question:
            question['analysis'] += '答案: '+question['答案']+'\n'
        if '解析' in question:
            question['analysis'] += '解析: '+question['解析']+'\n'

        question['analysis'] = question['analysis'].replace('\n', r'\n')
        sql = 'insert into t_question('+','.join(fields) + ') values('
        for field in fields:
            sql += '"'+str(question[field])+'",'
        sql = sql[0:-1]+');\n'
        print(sql)


if __name__ == '__main__':
    questions = parse_question('questions2.md')
    make_sql(questions)
