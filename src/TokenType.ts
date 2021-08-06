export default class TokenType {
  name: string;
  regexp: string;

  constructor(name: string, regexp: string) {
    this.name = name;
    this.regexp = regexp;
  }
}

export const tokenTypesList = {
  NUMBER: new TokenType("NUMBER", "[0-9]*"),
  VARIABLE: new TokenType("VARIABLE", "([a-z][0-9]?)*"),
  OPERAND: new TokenType("OPERAND", "\\[\\w*\\]"),
  FUNCTION: new TokenType("FUNCTION", "[A-Z]*\\(.*\\)"),
  SEMICOLON: new TokenType("SEMICOLON", ";"),
  SPACE: new TokenType("SPACE", "[ \\n\\t\\r]"),
  ASSIGN: new TokenType("ASSIGN", "\\="),
  RETURN: new TokenType("RETURN", "RETURN"),
  PLUS: new TokenType("PLUS", "\\+"),
  MINUS: new TokenType("MINUS", "\\-"),
  DIVIDE: new TokenType("DIVIDE", "\\/"),
  MULTIPLY: new TokenType("MULTIPLY", "\\*"),
  LPAR: new TokenType("LPAR", "\\("),
  RPAR: new TokenType("RPAR", "\\)"),
};
