`use strict`;

import { Task } from './task.js';
import { User } from './user.js';

const task = new Task("Задача на составление модульной структуры проекта на JS!");
const user = new User(task);

user.do();