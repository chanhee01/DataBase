import mysql.connector
from faker import Faker;

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="111111",
    database="inha_DB"
)

cursor = connection.cursor();

fake = Faker()

sql_query = """
INSERT INTO Student (student_id, Name, Email, Phone_number, department_id, Major)
VALUES """

fake = Faker()

for student_id in range(1, 200001):
    Name = fake.unique.user_name()[:20]
    Email = f'{fake.word()}{student_id}@inha.com'

    random_number = fake.unique.random_number(digits=9)
    Phone_number = fake.phone_number()

    department_id = fake.random_int(min=1, max=5)

    if department_id == 1:
        Major = 'information&communication engineering'
    elif department_id == 2:
        Major = 'computer science engineering'
    elif department_id == 3:
        Major = 'electron engineering'
    elif department_id == 4:
        Major = 'electricity engineering'
    elif department_id == 5:
        Major = 'mechanical engineering'

    sql_query += f"({student_id}, '{Name}', '{Email}', '{Phone_number}', '{department_id}', '{Major}'),"

    print(f"학생 {student_id} 정보 추가 완료")

sql_query = sql_query.rstrip(',')

cursor.execute(sql_query)

connection.commit()

cursor.close()
connection.close()

print("db 생성 완료")
