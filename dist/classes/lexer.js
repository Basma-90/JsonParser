"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
// json lexer class
var token_1 = require("./token");
var Lexer = /** @class */ (function () {
    function Lexer(text) {
        this.text = text;
        this.pos = 0;
        this.currentChar = this.text[this.pos];
    }
    Lexer.prototype.advance = function () {
        this.pos++;
        if (this.pos > this.text.length - 1) {
            this.currentChar = null;
        }
        else {
            this.currentChar = this.text[this.pos];
        }
    };
    Lexer.prototype.skipWhitespace = function () {
        while (this.currentChar && this.currentChar === ' ') {
            this.advance();
        }
    };
    Lexer.prototype.integer = function () {
        var result = '';
        while (this.currentChar && this.currentChar.match(/[0-9]/)) {
            result += this.currentChar;
            this.advance();
        }
        return parseInt(result);
    };
    Lexer.prototype.float = function () {
        var result = '';
        while (this.currentChar && this.currentChar.match(/[0-9]/)) {
            result += this.currentChar;
            this.advance();
        }
        if (this.currentChar === '.') {
            result += this.currentChar;
            this.advance();
            while (this.currentChar && this.currentChar.match(/[0-9]/)) {
                result += this.currentChar;
                this.advance();
            }
        }
        return parseFloat(result);
    };
    Lexer.prototype.string = function () {
        this.advance();
        var result = '';
        while (this.currentChar && this.currentChar !== '"') {
            result += this.currentChar;
            this.advance();
        }
        this.advance();
        return result;
    };
    Lexer.prototype.getNextToken = function () {
        while (this.currentChar) {
            if (this.currentChar === ' ') {
                this.skipWhitespace();
                continue;
            }
            if (this.currentChar === '\n') {
                this.advance();
                continue;
            }
            if (this.currentChar.match(/[0-9]/)) {
                return new token_1.Token(this.integer().toString(), token_1.TokenType.Integer);
            }
            if (this.currentChar === '.') {
                return new token_1.Token(this.float().toString(), token_1.TokenType.Float);
            }
            if (this.currentChar === '"') {
                return new token_1.Token(this.string(), token_1.TokenType.String);
            }
            if (this.currentChar === '{') {
                this.advance();
                return new token_1.Token('{', token_1.TokenType.LeftBrace);
            }
            if (this.currentChar === '}') {
                this.advance();
                return new token_1.Token('}', token_1.TokenType.RightBrace);
            }
            if (this.currentChar === '[') {
                this.advance();
                return new token_1.Token('[', token_1.TokenType.LeftBracket);
            }
            if (this.currentChar === ']') {
                this.advance();
                return new token_1.Token(']', token_1.TokenType.RightBracket);
            }
            if (this.currentChar === ':') {
                this.advance();
                return new token_1.Token(':', token_1.TokenType.Colon);
            }
            if (this.currentChar === ',') {
                this.advance();
                return new token_1.Token(',', token_1.TokenType.Comma);
            }
            if (this.currentChar === 't' && this.text.slice(this.pos, this.pos + 4) === 'true') {
                this.advance();
                this.advance();
                this.advance();
                return new token_1.Token('true', token_1.TokenType.True);
            }
            if (this.currentChar === 'f' && this.text.slice(this.pos, this.pos + 5) === 'false') {
                this.advance();
                this.advance();
                this.advance();
                this.advance();
                return new token_1.Token('false', token_1.TokenType.False);
            }
            throw new Error("Invalid character: ".concat(this.currentChar));
        }
        return null;
    };
    Lexer.prototype.tokenize = function () {
        var tokens = [];
        var token = this.getNextToken();
        while (token) {
            tokens.push(token);
            token = this.getNextToken();
        }
        return tokens;
    };
    Lexer.prototype.lex = function () {
        return this.tokenize();
    };
    return Lexer;
}());
exports.Lexer = Lexer;
