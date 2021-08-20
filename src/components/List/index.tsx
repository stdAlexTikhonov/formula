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
import { Typography } from "@material-ui/core";

const mapping_ = {
  n: "num",
  s: "str",
  b: "bool",
  d: "date",
};

type Item = {
  name: string;
  type?: string;
  arbitrary_args?: boolean;
  is_operator?: boolean;
  arguments_types?: string[];
  return_type?: string;
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
      node.node_type = items[index].is_operator
        ? "OPERATOR"
        : type === "functions"
        ? "FUNCTION"
        : "OPERAND";
      node.left = null;
      node.right = null;
      node.user_input = false;

      if (type === "functions") {
        if (items[index].is_operator) {
          node.setLeft(items[index].arguments_types![0]);
          node.setArgs(
            items[index].arbitrary_args,
            items[index].arguments_types
          );
        } else {
          node.args = [];
          node.addArguments(items[index].arguments_types);
          node.arbitrary_args = items[index].arbitrary_args;
        }
        node.type = items[index].return_type;
      } else {
        node.type = items[index].type;
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
            <Typography
              variant="subtitle2"
              style={{ fontStyle: "italic", paddingRight: 10 }}
            >
              {item.type
                ? mapping_[item.type[0] as keyof typeof mapping_]
                : mapping_[item.return_type![0] as keyof typeof mapping_]}
            </Typography>
            <ListItemText primary={item.name} />
            {item.arguments_types
              ? "(" + item.arguments_types.join(",") + ")"
              : ""}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
