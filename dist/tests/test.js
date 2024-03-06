"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_1 = require("../classes/lexer");
var parser_1 = require("../classes/parser");
var util = require('util');
var lexer = new lexer_1.Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value"}}');
var parser = new parser_1.Parser(lexer);
console.log(-util.inspect(parser.parse(), { showHidden: false, depth: null }));
var lexer2 = new lexer_1.Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4]}}');
var parser2 = new parser_1.Parser(lexer2);
console.log(util.inspect(parser2.parse(), { showHidden: false, depth: null }));
var lexer3 = new lexer_1.Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value"}]}}');
var parser3 = new parser_1.Parser(lexer3);
console.log(util.inspect(parser3.parse(), { showHidden: false, depth: null }));
var lexer4 = new lexer_1.Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4]}]}}');
var parser4 = new parser_1.Parser(lexer4);
console.log(util.inspect(parser4.parse(), { showHidden: false, depth: null }));
var lexer5 = new lexer_1.Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4, {"key": "value"}]}]}}');
var parser5 = new parser_1.Parser(lexer5);
console.log(util.inspect(parser5.parse(), { showHidden: false, depth: null }));
var lexer6 = new lexer_1.Lexer('{"key": "value", "arr": [1, 2, 3, 4], "obj": {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4, {"key": "value", "arr": [1, 2, 3, 4]}]}]}}');
var parser6 = new parser_1.Parser(lexer6);
console.log(util.inspect(parser6.parse(), { showHidden: false, depth: null }));