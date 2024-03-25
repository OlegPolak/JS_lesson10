import {name} from "./module";
import './style.css';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import toDate from 'validator/lib/toDate';

console.log("i am: " + name);



console.log(isEmail('foo@bar.com'));
console.log(isURL('123456'));
console.log(toDate('12.12.2012'));

var moment = require('moment')

console.log(moment().format("MMM Do YY"));
///hhrjkhkjk///