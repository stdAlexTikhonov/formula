import greater from "./greater.svg";
import less from "./less.svg";
import plus from "./plus.svg";
import minus from "./minus.svg";
import eq from "./eq.svg";
import mult from "./mult.svg";
import divide from "./divide.svg";
import gre_or_eq from "./gre_or_eq.svg";
import less_or_eq from "./less_or_eq.svg";
import not_eq from "./not_eq.svg";

type Props = {
  value: string;
};

export const CustomIcon: React.FC<Props> = ({ value }) => {
  const getIcon = (value: string) => {
    switch (value) {
      case "+":
        return <img src={"." + plus} width={20} height={20} alt="+" />;
      case "-":
        return <img src={"." + minus} width={20} height={20} alt="-" />;
      case "<":
        return <img src={"." + less} width={20} height={20} alt="<" />;
      case "<=":
        return <img src={"." + less_or_eq} width={20} height={20} alt="<=" />;
      case ">":
        return <img src={"." + greater} width={20} height={20} alt=">" />;
      case ">=":
        return <img src={"." + gre_or_eq} width={20} height={20} alt=">=" />;
      case "!=":
        return <img src={"." + not_eq} width={20} height={20} alt="!=" />;
      case "==":
        return <img src={"." + eq} width={20} height={20} alt="==" />;
      case "*":
        return <img src={"." + mult} width={20} height={20} alt="*" />;
      case "/":
        return <img src={"." + divide} width={20} height={20} alt="/" />;
      default:
        return value;
    }
  };

  return <>{getIcon(value)}</>;
};
