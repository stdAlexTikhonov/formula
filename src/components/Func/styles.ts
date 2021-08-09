import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme, { state: boolean }>({
  box: {
    cursor: "pointer",
    margin: 5,
    padding: 5,
    borderLeft: ({ state }) => (state ? "2px solid black" : "none"),
    borderRight: ({ state }) => (state ? "2px solid black" : "none"),
    flexDirection: ({ state }) => (state ? "column" : "row"),
    alignItems: "center",
    display: "flex",
  },
  typography: {
    margin: 5,
    fontSize: 25,
  },
  mid: {
    padding: 15,
    fontSize: 25,
  },
});
