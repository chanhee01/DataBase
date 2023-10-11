CREATE TABLE building (
  building_id INT PRIMARY KEY,
  Name VARCHAR(20)
);

CREATE TABLE department (
  department_id INT PRIMARY KEY,
  Name VARCHAR(45),
  Email VARCHAR(45),
  Phone_number VARCHAR(20)
);

CREATE TABLE room (
  room_id INT PRIMARY KEY,
  Name VARCHAR(20),
  Capacity INT,
  building_id INT,
  department_id INT,
  FOREIGN KEY(building_id) REFERENCES building(building_id) ON DELETE CASCADE,
  FOREIGN KEY(department_id) REFERENCES department(department_id) ON DELETE CASCADE
);
ALTER TABLE room ADD FOREIGN KEY(building_id) REFERENCES building(building_id) ON DELETE SET NULL;
ALTER TABLE room ADD FOREIGN KEY(department_id) REFERENCES department(department_id) ON DELETE SET NULL;

CREATE TABLE student (
  student_id INT PRIMARY KEY,
  Name VARCHAR(20),
  Email VARCHAR(45),
  Phone_number VARCHAR(45),
  Major VARCHAR(45),
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES department(department_id) ON DELETE CASCADE
);
ALTER TABLE student ADD FOREIGN KEY(department_id) REFERENCES department(department_id) ON DELETE SET NULL;

CREATE TABLE class (
  class_id INT PRIMARY KEY,
  Name VARCHAR(20),
  Professor VARCHAR(20),
  NumberOfParticipants INT,
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES department(department_id) ON DELETE CASCADE
);
ALTER TABLE class ADD FOREIGN KEY(department_id) REFERENCES department(department_id) ON DELETE SET NULL;

CREATE TABLE club (
  club_id INT PRIMARY KEY,
  Name VARCHAR(20),
  student_id INT,
  FOREIGN KEY(student_id) REFERENCES student(student_id) ON DELETE CASCADE
);
ALTER TABLE club ADD FOREIGN KEY(student_id) REFERENCES student(student_id) ON DELETE SET NULL;

CREATE TABLE employee (
  employee_id INT PRIMARY KEY,
  Name VARCHAR(20),
  Position VARCHAR(20),
  building_id INT,
  FOREIGN KEY(building_id) REFERENCES building(building_id) ON DELETE CASCADE
);
ALTER TABLE employee ADD FOREIGN KEY(building_id) REFERENCES building(building_id) ON DELETE SET NULL;


INSERT INTO building VALUES(1, 'hi-tech');
INSERT INTO building VALUES(2, 'building 2');
INSERT INTO building VALUES(3, 'building 5');
INSERT INTO building VALUES(4, 'building 6');
INSERT INTO building VALUES(5, 'building 9');

INSERT INTO department VALUES(1, 'information&communication engineering', 'ice@inha.edu', '032-1111-1111');
INSERT INTO department VALUES(2, 'computer science engineering', 'computer@inha.edu', '032-2222-2222');
INSERT INTO department VALUES(3, 'electron engineering', 'electron@inha.edu', '032-3333-3333');
INSERT INTO department VALUES(4, 'electricity engineering', 'electricity@inha.edu', '032-4444-4444');
INSERT INTO department VALUES(5, 'mechanical engineering', 'mechanical@inha.edu', '032-5555-5555');

INSERT INTO room VALUES(1, 'room 230', 60, 1, 1);
INSERT INTO room VALUES(2, 'room 232', 60, 2, 5);
INSERT INTO room VALUES(3, 'room 228', 40, 1, 2);
INSERT INTO room VALUES(4, 'room 530', 40, 1, 3);
INSERT INTO room VALUES(5, 'room 630', 50, 1, 4);

INSERT INTO student VALUES(12191800, 'kim', 'kim@inha.edu', '010-1111-1111', 'information&communication engineering', 1);
INSERT INTO student VALUES(12191801, 'lee', 'lee@inha.edu', '010-2222-2222', 'computer science engineering', 2);
INSERT INTO student VALUES(12191802, 'park', 'park@inha.edu', '010-3333-3333', 'electron engineering', 3);
INSERT INTO student VALUES(12191803, 'jo', 'jo@inha.edu', '010-4444-4444', 'electricity engineering', 4);
INSERT INTO student VALUES(12191804, 'yu', 'yu@inha.edu', '010-4444-4444', 'information&communication engineering', 1);

INSERT INTO class VALUES(1, 'data_structure', 'Kim', 40, 1);
INSERT INTO class VALUES(2, 'database', 'Choi', 100, 2);
INSERT INTO class VALUES(3, 'computer network', 'Yu', 35, 3);
INSERT INTO class VALUES(4, 'algorithm', 'Choi', 50, 5);
INSERT INTO class VALUES(5, 'computer security', 'Lee', 47, 4);

INSERT INTO club VALUES(1, 'math', 12191800);
INSERT INTO club VALUES(2, 'english', 12191801);
INSERT INTO club VALUES(3, 'soccer', 12191802);
INSERT INTO club VALUES(4, 'basketball', 12191803);
INSERT INTO club VALUES(5, 'game', 12191804);

INSERT INTO employee VALUES(1, 'Kim', 'professor', 1);
INSERT INTO employee VALUES(2, 'Lee', 'assistant', 3);
INSERT INTO employee VALUES(3, 'Park', 'staff', 2);
INSERT INTO employee VALUES(4, 'Yu', 'administrator', 4);
INSERT INTO employee VALUES(5, 'Jo', 'cleaner', 5);