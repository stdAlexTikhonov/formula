import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles<Theme, { state: boolean; brace: boolean }>({
  box: {
    display: "flex",
    alignItems: "center",
    flexDirection: ({ state }) => (state ? "column" : "row"),
    cursor: "pointer",
    borderLeft: ({ brace }) => (brace ? "2px solid black" : "none"),
    borderRight: ({ brace }) => (brace ? "2px solid black" : "none"),
    margin: 5,
    padding: 5,
    position: "relative",
  },
  mid: {
    margin: 15,
    fontSize: 25,
  },
  btn: {
    position: "absolute",
    top: -18,
    right: -12,
  },
  icon: {
    fontSize: 15,
  },
});
