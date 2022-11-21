const assertEqual = require('../assertEqual');

assertEqual("abc", "abc"), true;
assertEqual("123", "abc"), false;