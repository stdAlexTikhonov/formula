import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  box: {
    width: 1000,
    height: 700,
    border: "1px solid black",
    margin: "auto",
    display: "flex",
    overflow: "auto",
    position: "relative",
  },
  inner_box: {
    margin: "auto",
  },
}));
