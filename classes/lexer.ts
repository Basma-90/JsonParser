// json lexer class
import { Token, TokenType } from './token';         


export class Lexer{
    text: string;
    pos: number;
    currentChar: string | null;

    constructor(text: string){
        this.text = text;
        this.pos = 0;
        this.currentChar = this.text[this.pos];
    }

    advance(){
        this.pos++;
        if(this.pos > this.text.length - 1){
            this.currentChar = null;
        }else{
            this.currentChar = this.text[this.pos];
        }
    }

    skipWhitespace(){
        while(this.currentChar && this.currentChar === ' '){
            this.advance();
        }
    }

    integer(){
        let result = '';
        while(this.currentChar && this.currentChar.match(/[0-9]/)){
            result += this.currentChar;
            this.advance();
        }
        return parseInt(result);
    }

    float (){
        let result = '';
        while(this.currentChar && this.currentChar.match(/[0-9]/)){
            result += this.currentChar;
            this.advance();
        }
        if(this.currentChar === '.'){
            result += this.currentChar;
            this.advance();
            while(this.currentChar && this.currentChar.match(/[0-9]/)){
                result += this.currentChar;
                this.advance();
            }
        }
        return parseFloat(result);
    }

    string(){
        this.advance();
        let result = '';
        while(this.currentChar && this.currentChar !== '"'){
            result += this.currentChar;
            this.advance();
        }
        this.advance();
        return result;
    }

    getNextToken(): Token | null {
        while (this.currentChar) {
            if (this.currentChar === ' ') {
                this.skipWhitespace();
                continue;
            }
            if(this.currentChar === '\n'){
                this.advance();
                continue;
            }
            if (this.currentChar.match(/[0-9]/)) {
                return new Token(this.integer().toString(), TokenType.Integer);
            }
            if (this.currentChar === '.') {
                return new Token(this.float().toString(), TokenType.Float);
            }
            if (this.currentChar === '"') {
                return new Token(this.string(), TokenType.String);
            }
            if (this.currentChar === '{') {
                this.advance();
                return new Token('{', TokenType.LeftBrace);
            }
            if (this.currentChar === '}') {
                this.advance();
                return new Token('}', TokenType.RightBrace);
            }
            if (this.currentChar === '[') {
                this.advance();
                return new Token('[', TokenType.LeftBracket);
            }
            if (this.currentChar === ']') {
                this.advance();
                return new Token(']', TokenType.RightBracket);
            }
            if (this.currentChar === ':') {
                this.advance();
                return new Token(':', TokenType.Colon);
            }
            if (this.currentChar === ',') {
                this.advance();
                return new Token(',', TokenType.Comma);
            }
            if (this.currentChar === 't' && this.text.slice(this.pos, this.pos + 4) === 'true'){
                this.advance();
                this.advance();
                this.advance();
                return new Token('true', TokenType.True);
            }
            if (this.currentChar === 'f' && this.text.slice(this.pos, this.pos + 5) === 'false'){
                this.advance();
                this.advance();
                this.advance();
                this.advance();
                return new Token('false', TokenType.False);
            }
            throw new Error(`Invalid character: ${this.currentChar}`);
        }
        return null;
    }

    tokenize(){
        let tokens = [];
        let token = this.getNextToken();
        while(token){
            tokens.push(token);
            token = this.getNextToken();
        }
        return tokens;
    }

    lex(){
        return this.tokenize();
    }

}
