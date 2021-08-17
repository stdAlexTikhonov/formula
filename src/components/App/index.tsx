import { VisualBuilder } from "../VisualBuilder";
import Box from "@material-ui/core/Box";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { setData } from "../../store/codeSlice";
import { DATA } from "../../data";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(DATA));
  }, []);

  return (
    <Box display="flex" height="100vh" width="100%">
      <VisualBuilder />
    </Box>
  );
};
