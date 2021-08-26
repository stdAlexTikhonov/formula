import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    checkbox: {
      padding: 0,
      margin: 0,
      marginRight: 10,
    },
  })
);
