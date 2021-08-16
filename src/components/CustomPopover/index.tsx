import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { MostCommon } from "../MostCommon";
import { UserInput } from "../UserInput";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Wrapper } from "../Wrapper";
import { DATA } from "../../data";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { CustomButtons } from "../CustomButtons";
import Tree, { TreeNode } from "../../Tree";
import { useAppDispatch } from "../../hooks";
import { setCurrentIndex, updateTree } from "../../store/codeSlice";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import AddIcon from "@material-ui/icons/Add";
import { CustomIcon } from "../CustomIcon";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  })
);

export const CustomPopover: React.FC<{ index: number; value: string }> = ({
  index,
  value,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const dispatch = useAppDispatch();
  const [node, setNode] = React.useState<TreeNode>(Tree.find(index));
  const [show, setShow] = React.useState<boolean>(false);
  const [show_delete, setShowDelete] = React.useState(false);
  const [type, setType] = React.useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    dispatch(setCurrentIndex(index));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListItemClick = (_type: string) => {
    setShow(true);
    setType(_type);
  };

  const handleCancel = () => {
    setShow(false);
    setType(null);
  };

  const getComponent = () => {
    switch (type) {
      case "functions":
        return <Wrapper items={DATA["FUNCTIONS"]} type="functions" />;
      case "facts":
        return <Wrapper items={DATA["FACTS"]} type="facts" />;
      case "measures":
        return <Wrapper items={DATA["MEASURES"]} type="measures" />;
      case "variables":
        return <Wrapper items={DATA["VARIABLES"]} type="variables" />;
    }
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.delete(index);
    node.user_input = false;
    dispatch(updateTree());
  };

  const handleSwapLeft = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.swap_with_left(index);
    dispatch(updateTree());
  };

  const handleSwapRight = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    Tree.swap_with_right(index);
    dispatch(updateTree());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {value ? (
        <Button
          onClick={handleClick}
          disableRipple={true}
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          {node.user_input ? (
            <Box color="red">"{value}"</Box>
          ) : (
            <CustomIcon value={value} />
          )}
          {show_delete && (
            <IconButton
              size="small"
              onClick={handleDelete}
              style={{ position: "absolute", top: -5, right: -5 }}
            >
              <ClearIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
          {show_delete && node.left && node.left.type === "OPERATOR" && (
            <IconButton
              size="small"
              onClick={handleSwapLeft}
              style={{ position: "absolute", top: 7, left: -5 }}
            >
              <SyncAltIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
          {show_delete && node.right && node.right.type === "OPERATOR" && (
            <IconButton
              size="small"
              onClick={handleSwapRight}
              style={{ position: "absolute", top: 7, right: -5 }}
            >
              <SyncAltIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
        </Button>
      ) : (
        <IconButton onClick={handleClick}>
          <AddIcon />
        </IconButton>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box position="relative" maxWidth="300px">
          <UserInput setNode={setNode} />
          <CustomButtons node={node} setNode={setNode} />
          <List component="nav">
            <ListItem
              key={0}
              button
              onClick={() => handleListItemClick("variables")}
            >
              <ListItemText primary={"Переменные"} />
              <ListItemIcon style={{ minWidth: 0 }}>
                <ArrowForwardIosIcon />
              </ListItemIcon>
            </ListItem>

            <ListItem
              key={1}
              button
              onClick={() => handleListItemClick("measures")}
            >
              <ListItemText primary={"Меры"} />
              <ListItemIcon style={{ minWidth: 0 }}>
                <ArrowForwardIosIcon />
              </ListItemIcon>
            </ListItem>

            <ListItem
              key={2}
              button
              onClick={() => handleListItemClick("facts")}
            >
              <ListItemText primary={"Факты"} />
              <ListItemIcon style={{ minWidth: 0 }}>
                <ArrowForwardIosIcon />
              </ListItemIcon>
            </ListItem>

            <ListItem
              key={3}
              button
              onClick={() => handleListItemClick("functions")}
            >
              <ListItemText primary={"Функции"} />
              <ListItemIcon style={{ minWidth: 0 }}>
                <ArrowForwardIosIcon />
              </ListItemIcon>
            </ListItem>
          </List>
          {show && (
            <Box
              position="absolute"
              left="0px"
              top="0px"
              bgcolor="white"
              width="100%"
              overflow="hidden"
            >
              <IconButton
                onClick={handleCancel}
                style={{ marginTop: 10, marginLeft: 10 }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              {getComponent()}
            </Box>
          )}
        </Box>
      </Popover>
    </div>
  );
};
