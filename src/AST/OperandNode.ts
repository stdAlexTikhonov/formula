import ExpressionNode from "./ExpressionNode";
import Token from "../Token";

export default class OperandNode extends ExpressionNode {
  operand: Token;

  constructor(operand: Token) {
    super();
    this.operand = operand;
  }
}
