import {Parent, Student, Teacher} from './users/index';
import Message from './users/message';
import {MessageType} from './users/types';
import {generateID, generateUnixDate} from './utils/constants';

const teacher = new Teacher(
  `${generateID()}`,
  'Math',
  'Teacher',
  'teacher@gmail.com',
  undefined,
  'Mr.'
);

const student = new Student(
  `${generateID()}`,
  'The',
  'Student',
  'student@gmail.com',
  undefined
);

const parent = new Parent(
  `${generateID()}`,
  'The',
  'Parent',
  'parent@gmail.com',
  undefined,
  'Mr.'
);

const msg1 = new Message(
  student,
  teacher,
  'hellooooo',
  generateUnixDate(),
  MessageType.Manual
);

const msg2 = new Message(
  parent,
  teacher,
  'hellooooo',
  generateUnixDate(),
  MessageType.Manual
);

console.log(msg1.saveMessage());
console.log(msg2.saveMessage());
