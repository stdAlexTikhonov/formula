import useStyles from "./styles";
import cn from "classnames";
import Box from "@material-ui/core/Box";
import { getText } from "../../store/codeSlice";
import { useAppSelector } from "../../hooks";

type Props = {
  value: string;
};

export const CustomIcon: React.FC<Props> = ({ value }) => {
  const text = useAppSelector(getText);
  const classes = useStyles({ text });
  const getIcon = (value: string) => {
    switch (value) {
      case "+":
        return <Box className={cn(classes.mathIcon, classes.plus)}></Box>;
      case "-":
        return <Box className={cn(classes.mathIcon, classes.minus)}></Box>;
      case "<":
        return <Box className={cn(classes.mathIcon, classes.lt)}></Box>;
      case "<=":
        return <Box className={cn(classes.mathIcon, classes.lte)}></Box>;
      case ">":
        return <Box className={cn(classes.mathIcon, classes.gt)}></Box>;
      case ">=":
        return <Box className={cn(classes.mathIcon, classes.gte)}></Box>;
      case "!=":
        return <Box className={cn(classes.mathIcon, classes.ne)}></Box>;
      case "==":
        return <Box className={cn(classes.mathIcon, classes.eq)}></Box>;
      case "*":
        return <Box className={cn(classes.mathIcon, classes.mult)}></Box>;
      case "/":
        return <Box className={cn(classes.mathIcon, classes.divide)}></Box>;
      default:
        return value;
    }
  };

  return <>{getIcon(value)}</>;
};
