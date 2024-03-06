"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["Integer"] = "INTEGER";
    TokenType["Float"] = "FLOAT";
    TokenType["String"] = "STRING";
    TokenType["LeftBrace"] = "LEFT_BRACE";
    TokenType["RightBrace"] = "RIGHT_BRACE";
    TokenType["Colon"] = "COLON";
    TokenType["Comma"] = "COMMA";
    TokenType["EOF"] = "EOF";
    TokenType["LeftBracket"] = "LEFT_BRACKET";
    TokenType["RightBracket"] = "RIGHT_BRACKET";
    TokenType["True"] = "TRUE";
    TokenType["False"] = "FALSE";
    TokenType["DoupleQuote"] = "DOUBLE_QUOTE";
})(TokenType || (exports.TokenType = TokenType = {}));
var Token = /** @class */ (function () {
    function Token(token, tokenType) {
        this._token = token;
        this._tokenType = tokenType;
    }
    Object.defineProperty(Token.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "tokenType", {
        get: function () {
            return this._tokenType;
        },
        enumerable: false,
        configurable: true
    });
    return Token;
}());
exports.Token = Token;
