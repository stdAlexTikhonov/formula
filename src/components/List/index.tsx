import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCode, getCurrentIndex, updateTree } from "../../store/codeSlice";
import Tree from "../../Tree";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const mapping_ = {
  n: "num",
  s: "str",
  b: "bool",
  d: "date",
  a: "any",
};

const an_mapping_ = {
  n: "Числовые",
  s: "Строковые",
  b: "Логические",
  d: "Работа с датами",
  a: "Остальные",
};

type Item = {
  name: string;
  type?: string;
  arbitrary_args?: boolean;
  is_operator?: boolean;
  arguments_types?: string[];
  return_type?: string;
  group: string;
};

type Props = {
  type: string;
  items: Item[];
};

export const CustomList: React.FC<Props> = ({ items, type }) => {
  const dispatch = useAppDispatch();
  const index_in_tree = useAppSelector(getCurrentIndex);
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [transformed_list] = useState<any>({});

  const [keys_, setKeys] = useState<string[]>([]);

  useEffect(() => {
    items.forEach((item: Item) => {
      if (item) {
        if (transformed_list[`${item.group[0]}`])
          transformed_list[`${item.group[0]}`].push(item);
        else transformed_list[`${item.group[0]}`] = [item];
      }
    });
    setKeys(Object.keys(transformed_list));
  }, []);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    value: string,
    key_: string
  ) => {
    event.stopPropagation();
    setSelectedIndex(index);
    dispatch(setCode(value));
    const node = Tree.find(index_in_tree);

    if (node) {
      node.value = value;
      node.node_type = transformed_list[key_][index].is_operator
        ? "OPERATOR"
        : type === "functions"
        ? "FUNCTION"
        : "OPERAND";
      node.left = null;
      node.right = null;
      node.user_input = false;

      if (type === "functions") {
        if (transformed_list[key_][index].is_operator) {
          node.setLeft(transformed_list[key_][index].arguments_types![0]);
          node.setArgs(
            transformed_list[key_][index].arbitrary_args,
            transformed_list[key_][index].arguments_types
          );
        } else {
          node.args = [];
          node.addArguments(transformed_list[key_][index].arguments_types);
          node.arbitrary_args = transformed_list[key_][index].arbitrary_args;
        }
        node.type = transformed_list[key_][index].return_type;
      } else {
        node.type = transformed_list[key_][index].type;
      }
      node.checkType();
      dispatch(updateTree());
    }
  };

  return (
    <div className={classes.root}>
      {keys_.map((key_: string) => {
        return transformed_list[key_ as keyof typeof transformed_list].length >
          0 ? (
          <>
            <Typography variant="caption" style={{ paddingLeft: 15 }}>
              {an_mapping_[key_ as keyof typeof an_mapping_]
                ? an_mapping_[key_ as keyof typeof an_mapping_]
                : transformed_list[key_ as keyof typeof transformed_list][0]
                    .group}
            </Typography>
            <Divider />
            <List component="nav">
              {transformed_list[key_ as keyof typeof transformed_list].map(
                (item: Item, ind: number) => (
                  <ListItem
                    key={ind}
                    button
                    selected={selectedIndex === ind}
                    onClick={(event) =>
                      handleListItemClick(event, ind, item.name, key_)
                    }
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontStyle: "italic",
                        paddingRight: 10,
                        minWidth: 30,
                      }}
                    >
                      {mapping_[item.group[0] as keyof typeof mapping_]}
                    </Typography>
                    <Divider
                      orientation="vertical"
                      style={{ height: 28, marginRight: 10 }}
                    />
                    <ListItemText primary={item.name} />
                    {item.arguments_types
                      ? "(" + item.arguments_types.join(",") + ")"
                      : ""}
                  </ListItem>
                )
              )}
            </List>
          </>
        ) : null;
      })}
    </div>
  );
};
