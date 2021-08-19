import React, { useEffect } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { UserInput } from "../UserInput";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Wrapper } from "../Wrapper";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { CustomButtons } from "../CustomButtons";
import Tree, { TreeNode } from "../../Tree";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentIndex, updateTree, getCode } from "../../store/codeSlice";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import AddIcon from "@material-ui/icons/Add";
import { CustomIcon } from "../CustomIcon";
import ClearIcon from "@material-ui/icons/Clear";

export const CustomPopover: React.FC<{ index: number; value: string }> = ({
  index,
  value,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const dispatch = useAppDispatch();
  const [node, setNode] = React.useState<TreeNode>(Tree.find(index));
  const [show, setShow] = React.useState<boolean>(false);
  const [show_delete, setShowDelete] = React.useState(false);
  const [type, setType] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const code = useAppSelector(getCode);

  useEffect(() => {
    setAnchorEl(null);
    setOpen(false);
  }, [code]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    dispatch(setCurrentIndex(index));
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
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
        return <Wrapper type="functions" />;
      case "variables":
        return <Wrapper type="variables" />;
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

  // const open = Boolean(anchorEl);
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
          {node.user_input && isNaN(parseInt(value)) ? (
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
      {open && (
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
                width="100%"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                height="100%"
                bgcolor="white"
              >
                <IconButton
                  onClick={handleCancel}
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    alignSelf: "flex-start",
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                {getComponent()}
              </Box>
            )}
          </Box>
        </Popover>
      )}
    </div>
  );
};
