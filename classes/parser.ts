import {Lexer} from './lexer';
import {Token, TokenType} from './token';

export class Parser{

    lexer: Lexer;
    currentToken: Token;

    constructor(lexer: Lexer){
        this.lexer = lexer;
        this.currentToken = this.lexer.getNextToken() ?? new Token(TokenType.EOF, "");
    }

    error(message: string) {
        throw new Error(message);
    }

    eat(tokenType: TokenType) {
        if (this.currentToken?.tokenType === tokenType) {
            this.currentToken = this.lexer.getNextToken() ?? new Token(TokenType.EOF, "");
        } else {
            this.error(`Expected ${tokenType} but found ${this.currentToken?.tokenType}`);
        }
    }

    parse(): any {
        const token = this.currentToken;
        if(!token){
            return null;
        }
        if (token.tokenType === TokenType.Integer || token.tokenType === TokenType.Float || token.tokenType === TokenType.String) {
            this.eat(token.tokenType);
            return token.token;
        } else if (token.tokenType === TokenType.LeftBrace) {
            return this.parseObject();
        } else if (token.tokenType === TokenType.LeftBracket) {
            return this.parseArray();
        } else if (token.tokenType === TokenType.True) {
            this.eat(TokenType.True);
            return true;
        } else if (token.tokenType === TokenType.False) {
            this.eat(TokenType.False);
            return false;
        } else if (token.tokenType === TokenType.EOF) {
            return null;
        } else {
            this.error(`Invalid token: ${token.tokenType}`);
        }
    }
    
    parseObject(): any {
        this.eat(TokenType.LeftBrace);
        let obj: {[key: string]: any} = {};
        while(this.currentToken?.tokenType !== TokenType.RightBrace){
            let key = this.parse() as string;
            this.eat(TokenType.Colon);
            let value = this.parse();
            obj[key] = value;
            if(this.currentToken?.tokenType === TokenType.Comma){
                this.eat(TokenType.Comma);
            }
        }
        this.eat(TokenType.RightBrace);
        return obj;
    }
    
    parseArray(): any {
        this.eat(TokenType.LeftBracket);
        let arr = [];
        while(this.currentToken?.tokenType !== TokenType.RightBracket){
            arr.push(this.parse());
            if(this.currentToken?.tokenType === TokenType.Comma){
                this.eat(TokenType.Comma);
            }
        }
        this.eat(TokenType.RightBracket);
        return arr;
    }
    parseJSON(){
        const result = this.parse();
        if (result === null && this.currentToken?.tokenType === TokenType.EOF) {
            return result;
        } else {
            return null;
        }
    }
}
