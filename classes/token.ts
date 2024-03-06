export enum TokenType {
    Integer = 'INTEGER',
    Float = 'FLOAT',
    String = 'STRING',
    LeftBrace = 'LEFT_BRACE',
    RightBrace = 'RIGHT_BRACE',
    Colon = 'COLON',
    Comma = 'COMMA',
    EOF = "EOF",
    LeftBracket = "LEFT_BRACKET",
    RightBracket = "RIGHT_BRACKET",
    True = "TRUE",
    False = "FALSE",
    DoupleQuote = "DOUBLE_QUOTE",
}
export class Token{
    private _token: string;
    private _tokenType: string;

    constructor(token: string , tokenType: string){
        this._token = token;
        this._tokenType = tokenType;
    }

    get token(): string{
        return this._token;
    }

    get tokenType(): string{
        return this._tokenType;
    }
}
