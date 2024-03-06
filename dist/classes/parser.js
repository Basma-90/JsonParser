"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
var token_1 = require("./token");
var Parser = /** @class */ (function () {
    function Parser(lexer) {
        var _a;
        this.lexer = lexer;
        this.currentToken = (_a = this.lexer.getNextToken()) !== null && _a !== void 0 ? _a : new token_1.Token(token_1.TokenType.EOF, "");
    }
    Parser.prototype.error = function (message) {
        throw new Error(message);
    };
    Parser.prototype.eat = function (tokenType) {
        var _a, _b, _c;
        if (((_a = this.currentToken) === null || _a === void 0 ? void 0 : _a.tokenType) === tokenType) {
            this.currentToken = (_b = this.lexer.getNextToken()) !== null && _b !== void 0 ? _b : new token_1.Token(token_1.TokenType.EOF, "");
        }
        else {
            this.error("Expected ".concat(tokenType, " but found ").concat((_c = this.currentToken) === null || _c === void 0 ? void 0 : _c.tokenType));
        }
    };
    Parser.prototype.parse = function () {
        var token = this.currentToken;
        if (!token) {
            return null;
        }
        if (token.tokenType === token_1.TokenType.Integer || token.tokenType === token_1.TokenType.Float || token.tokenType === token_1.TokenType.String) {
            this.eat(token.tokenType);
            return token.token;
        }
        else if (token.tokenType === token_1.TokenType.LeftBrace) {
            return this.parseObject();
        }
        else if (token.tokenType === token_1.TokenType.LeftBracket) {
            return this.parseArray();
        }
        else if (token.tokenType === token_1.TokenType.True) {
            this.eat(token_1.TokenType.True);
            return true;
        }
        else if (token.tokenType === token_1.TokenType.False) {
            this.eat(token_1.TokenType.False);
            return false;
        }
        else if (token.tokenType === token_1.TokenType.EOF) {
            return null;
        }
        else {
            this.error("Invalid token: ".concat(token.tokenType));
        }
    };
    Parser.prototype.parseObject = function () {
        var _a, _b;
        this.eat(token_1.TokenType.LeftBrace);
        var obj = {};
        while (((_a = this.currentToken) === null || _a === void 0 ? void 0 : _a.tokenType) !== token_1.TokenType.RightBrace) {
            var key = this.parse();
            this.eat(token_1.TokenType.Colon);
            var value = this.parse();
            obj[key] = value;
            if (((_b = this.currentToken) === null || _b === void 0 ? void 0 : _b.tokenType) === token_1.TokenType.Comma) {
                this.eat(token_1.TokenType.Comma);
            }
        }
        this.eat(token_1.TokenType.RightBrace);
        return obj;
    };
    Parser.prototype.parseArray = function () {
        var _a, _b;
        this.eat(token_1.TokenType.LeftBracket);
        var arr = [];
        while (((_a = this.currentToken) === null || _a === void 0 ? void 0 : _a.tokenType) !== token_1.TokenType.RightBracket) {
            arr.push(this.parse());
            if (((_b = this.currentToken) === null || _b === void 0 ? void 0 : _b.tokenType) === token_1.TokenType.Comma) {
                this.eat(token_1.TokenType.Comma);
            }
        }
        this.eat(token_1.TokenType.RightBracket);
        return arr;
    };
    Parser.prototype.parseJSON = function () {
        var _a;
        var result = this.parse();
        if (result === null && ((_a = this.currentToken) === null || _a === void 0 ? void 0 : _a.tokenType) === token_1.TokenType.EOF) {
            return result;
        }
        else {
            return null;
        }
    };
    return Parser;
}());
exports.Parser = Parser;
