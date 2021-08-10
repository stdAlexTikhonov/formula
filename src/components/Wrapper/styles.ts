import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  text: {
    width: "90%",
    margin: 10,
  },
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  box: {
    maxHeight: 300,
    overflow: "auto",
    width: "100%",
  },
}));
