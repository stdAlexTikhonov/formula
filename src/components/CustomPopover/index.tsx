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
  const [node, setNode] = React.useState<TreeNode>(Tree.find(index));
  const [show, setShow] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
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

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {value}
      </Button>
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
