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

type Item = {
  name: string;
  args_quantity?: number;
  arbitrary_args?: boolean;
  is_operator?: boolean;
};

type Props = {
  type: string;
  items: Item[];
};

export const CustomList: React.FC<Props> = ({ items, type }) => {
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
      node.type = items[index].is_operator
        ? "OPERATOR"
        : type === "functions"
        ? "FUNCTION"
        : "OPERAND";
      node.left = null;
      node.right = null;
      node.user_input = false;

      if (node.type === "OPERATOR") {
        node.setLeft();
        node.setArgs();
      }

      if (type === "functions" && !items[index].is_operator) {
        if (node.args.length !== items[index].args_quantity) {
          node.args = [];
          node.addArguments(items[index].args_quantity);
          node.arbitrary_args = items[index].arbitrary_args;
        }
      }
      dispatch(updateTree());
    }
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        {items.map((item: Item, ind: number) => (
          <ListItem
            key={ind}
            button
            selected={selectedIndex === ind}
            onClick={(event) => handleListItemClick(event, ind, item.name)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
