import { Lexer } from '../classes/lexer';
import { Parser } from '../classes/parser';
const util = require('util');

const lexer = new Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value"}}');
const parser = new Parser(lexer);
console.log(util.inspect(parser.parse(), {showHidden: false, depth: null}));

const lexer2 = new Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4]}}');
const parser2 = new Parser(lexer2);
console.log(util.inspect(parser2.parse(), {showHidden: false, depth: null}));

const lexer3 = new Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value"}]}}');
const parser3 = new Parser(lexer3);
console.log(util.inspect(parser3.parse(), {showHidden: false, depth: null}));


const lexer4 = new Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4]}]}}'); 
const parser4 = new Parser(lexer4);
console.log(util.inspect(parser4.parse(), {showHidden: false, depth: null}));


const lexer5 = new Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4, {"key": "value"}]}]}}');
const parser5 = new Parser(lexer5);
console.log(util.inspect(parser5.parse(), {showHidden: false, depth: null}));


const lexer6 = new Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4]}]}]}}');
const parser6 = new Parser(lexer6);
console.log( util.inspect(parser6.parse(), {showHidden: false, depth: null}));


