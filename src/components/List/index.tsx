import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCode, getCurrentIndex, updateTree } from "../../store/codeSlice";
import Tree from "../../Tree";
import { useStyles } from "./styles";
import { DATA } from "../../data";

export default function SelectedListItem(props: any) {
  const dispatch = useAppDispatch();
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
      node.left = null;
      node.right = null;

      if (props.type === "functions") {
        node.addArguments(DATA["AGRGUMENTS"][index]);
      }
      dispatch(updateTree());
    }
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
