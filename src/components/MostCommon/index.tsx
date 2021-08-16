import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { CustomIcon } from "../CustomIcon";

export const MostCommon = () => {
  const classes = useStyles();

  return (
    <Box>
      <Button
        className={classes.btn}
        onClick={() => alert("1")}
        variant="outlined"
      >
        <CustomIcon value="+" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => alert("1")}
        variant="outlined"
      >
        <CustomIcon value="-" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => alert("1")}
        variant="outlined"
      >
        <CustomIcon value="/" />
      </Button>
      <Button
        className={classes.btn}
        onClick={() => alert("1")}
        variant="outlined"
      >
        <CustomIcon value="*" />
      </Button>
    </Box>
  );
};
