import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  text: {
    width: "90%",
    margin: 10,
    marginTop: 0,
  },
  wrapper: {
    width: "100%",
    overflow: "hidden",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  box: {
    flexGrow: 1,
    overflow: "auto",
    width: "100%",
  },
}));
