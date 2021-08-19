import React, { useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import { Wrapper } from "../Wrapper";
import { useAppDispatch } from "../../hooks";
import { setCurrentIndex, getCode } from "../../store/codeSlice";
import Tree from "../../Tree";
import { CustomButtons } from "../CustomButtons";
import { useAppSelector } from "../../hooks";
import { UserInput } from "../UserInput";
import { Trigger } from "../Trigger";

export const TemporaryDrawer: React.FC<{
  index: number;
}> = ({ index }) => {
  const dispatch = useAppDispatch();
  const [state, setState] = React.useState(false);
  const [node, setNode] = React.useState(Tree.find(index));
  const code = useAppSelector(getCode);

  useEffect(() => {
    setState(false);
  }, [code]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      if (open) dispatch(setCurrentIndex(index));
      setState(open);
    };

  const list = () => (
    <Box display="flex">
      <Wrapper type="functions" />
      <Wrapper type="variables" />
    </Box>
  );

  return (
    <div>
      <Trigger node={node} onClick={toggleDrawer(true)} />
      <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
        <UserInput setNode={setNode} />
        <CustomButtons node={node} />
        {list()}
      </Drawer>
    </div>
  );
};
