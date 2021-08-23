import { VisualBuilder } from "../VisualBuilder";
import Box from "@material-ui/core/Box";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setData, getText } from "../../store/codeSlice";
import { DATA } from "../../data";
import { TextInput } from "../TextInput";

export const App = () => {
  const text = useAppSelector(getText);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(DATA));
  }, []);

  return (
    <Box
      display="flex"
      height="100vh"
      width="100%"
      flexDirection="column"
      justifyContent="center"
    >
      {text ? <TextInput /> : <VisualBuilder />}
    </Box>
  );
};
