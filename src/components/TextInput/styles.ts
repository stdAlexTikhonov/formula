import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 800,
    margin: "auto",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));
