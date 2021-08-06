import ExpressionNode from "./ExpressionNode";
import Token from "../Token";

export default class FunctionNode extends ExpressionNode {
  function_: Token;

  constructor(func: Token) {
    super();
    this.function_ = func;
  }
}
