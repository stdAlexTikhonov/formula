import Token from "./Token";
import TokenType, { tokenTypesList } from "./TokenType";
import ExpressionNode from "./AST/ExpressionNode";
import StatementsNode from "./AST/StatementsNode";
import NumberNode from "./AST/NumberNode";
import VariableNode from "./AST/VariableNode";
import OperandNode from "./AST/OperandNode";
import BinOperationNode from "./AST/BinOperationNode";
import UnarOperationNode from "./AST/UnarOperationNode";
import FunctionNode from "./AST/FunctionNode";

export default class Parser {
  tokens: Token[];
  pos: number = 0;
  scope: any = {};

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  match(...expected: TokenType[]): Token | null {
    if (this.pos < this.tokens.length) {
      const currentToken = this.tokens[this.pos];
      if (expected.find((type) => type.name === currentToken.type.name)) {
        this.pos += 1;
        return currentToken;
      }
    }
    return null;
  }

  require(...expected: TokenType[]): Token {
    const token = this.match(...expected);
    if (!token) {
      throw new Error(`на позиции ${this.pos} ожидается ${expected[0].name}`);
    }
    return token;
  }

  parseVariableOrNumberOrOperand(): ExpressionNode {
    const number = this.match(tokenTypesList.NUMBER);
    if (number != null) {
      return new NumberNode(number);
    }
    const variable = this.match(tokenTypesList.VARIABLE);
    if (variable != null) {
      return new VariableNode(variable);
    }

    const operand = this.match(tokenTypesList.OPERAND);
    if (operand != null) {
      return new OperandNode(operand);
    }

    const func = this.match(tokenTypesList.FUNCTION);
    if (func != null) {
      return new FunctionNode(func);
    }

    throw new Error(
      `Ожидается (переменная/число/операнд) на ${this.pos} позиции`
    );
  }

  parseReturn(): ExpressionNode {
    const operatorReturn = this.match(tokenTypesList.RETURN);
    if (operatorReturn != null) {
      return new UnarOperationNode(operatorReturn, this.parseFormula());
    }
    throw new Error(`Ожидается унарный оператор RETURN на ${this.pos} позиции`);
  }

  parseParentheses(): ExpressionNode {
    if (this.match(tokenTypesList.LPAR) != null) {
      const node = this.parseFormula();
      this.require(tokenTypesList.RPAR);
      return node;
    } else {
      return this.parseVariableOrNumberOrOperand();
    }
  }

  parseFormula(): ExpressionNode {
    let leftNode = this.parseParentheses();
    let operator = this.match(
      tokenTypesList.MINUS,
      tokenTypesList.PLUS,
      tokenTypesList.DIVIDE,
      tokenTypesList.MULTIPLY
    );
    while (operator != null) {
      const rightNode = this.parseParentheses();
      leftNode = new BinOperationNode(operator, leftNode, rightNode);
      operator = this.match(
        tokenTypesList.MINUS,
        tokenTypesList.PLUS,
        tokenTypesList.DIVIDE,
        tokenTypesList.MULTIPLY
      );
    }
    return leftNode;
  }

  parseExpression(): ExpressionNode {
    if (this.match(tokenTypesList.VARIABLE) == null) {
      const returnNode = this.parseReturn();
      return returnNode;
    }
    this.pos -= 1;
    let variableNode = this.parseVariableOrNumberOrOperand();
    const assignOperator = this.match(tokenTypesList.ASSIGN);
    if (assignOperator != null) {
      const rightFormulaNode = this.parseFormula();
      const binaryNode = new BinOperationNode(
        assignOperator,
        variableNode,
        rightFormulaNode
      );
      return binaryNode;
    }
    throw new Error(
      `После переменной ожидается оператор присвоения на позиции ${this.pos}`
    );
  }

  parseCode(): ExpressionNode {
    const root = new StatementsNode();
    while (this.pos < this.tokens.length) {
      const codeStringNode = this.parseExpression();
      this.require(tokenTypesList.SEMICOLON);
      root.addNode(codeStringNode);
    }
    return root;
  }

  //   run(node: ExpressionNode): any {
  //     if (node instanceof NumberNode) {
  //       return parseInt(node.number.text);
  //     }
  //     if (node instanceof UnarOperationNode) {
  //       switch (node.operator.type.name) {
  //         case tokenTypesList.LOG.name:
  //           console.log(this.run(node.operand));
  //           return;
  //       }
  //     }
  //     if (node instanceof BinOperationNode) {
  //       switch (node.operator.type.name) {
  //         case tokenTypesList.PLUS.name:
  //           return this.run(node.leftNode) + this.run(node.rightNode);
  //         case tokenTypesList.MINUS.name:
  //           return this.run(node.leftNode) - this.run(node.rightNode);
  //         case tokenTypesList.ASSIGN.name:
  //           const result = this.run(node.rightNode);
  //           const variableNode = <VariableNode>node.leftNode;
  //           this.scope[variableNode.variable.text] = result;
  //           return result;
  //       }
  //     }
  //     if (node instanceof VariableNode) {
  //       if (this.scope[node.variable.text]) {
  //         return this.scope[node.variable.text];
  //       } else {
  //         throw new Error(
  //           `Переменная с названием ${node.variable.text} не обнаружена`
  //         );
  //       }
  //     }
  //     if (node instanceof StatementsNode) {
  //       node.codeStrings.forEach((codeString) => {
  //         this.run(codeString);
  //       });
  //       return;
  //     }
  //     throw new Error("Ошибка!");
  //   }
}
