import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCode, getCode, getCurrentIndex } from "../../store/codeSlice";
import Tree from "../../Tree";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function SelectedListItem(props: any) {
  const dispatch = useAppDispatch();
  const code = useAppSelector(getCode);
  const index_in_tree = useAppSelector(getCurrentIndex);
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    value: string
  ) => {
    setSelectedIndex(index);
    dispatch(setCode(value));
    const node = Tree.find(index_in_tree);
    if (node) {
      node.value = value;
      node.type = props.type === "functions" ? "FUNCTION" : "OPERAND";
      //Функции
      if (props.type === "functions") {
        node.setLeft();
        node.setRight();
      }
    }

    // if (props.type === "Функции") dispatch(setCode(code + `${value}(`));
    // else dispatch(setCode(code + `[${value}] `));
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        {props.items.map((item: string, ind: number) => (
          <ListItem
            key={ind}
            button
            selected={selectedIndex === ind}
            onClick={(event) => handleListItemClick(event, ind, item)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
