import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme, { text: boolean }>(() => ({
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
    margin: ({ text }) => (text ? "unset" : "auto"),
    width: ({ text }) => (text ? "100%" : "unset"),
    display: ({ text }) => (text ? "flex" : "unset"),
    flexWrap: ({ text }) => (text ? "wrap" : "unset"),
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
}));
