import { DATA } from "../../data";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { TemporaryDrawer } from "../Drawer";
import { useEffect } from "react";
import Lexer from "../../Lexer";
import Parser from "../../Parser";
import { GlobalSearch } from "../GlobalSearch";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCode, setCode } from "../../store/codeSlice";

export const TextInput = () => {
  const value = useAppSelector(getCode);
  const dispatch = useAppDispatch();
  //   const [value, setValue] = useState("");
  const [showGlobal, setShowGlobal] = useState(false);
  const [showFunc, setShowFunc] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    dispatch(setCode(e.target.value));
    // setValue(e.target.value);
  };

  useEffect(() => {
    try {
      const lexer = new Lexer(value);
      lexer.lexAnalisys();
      console.log(lexer.tokenList);
      const parser = new Parser(lexer.tokenList);
      const rootNode = parser.parseCode();
      console.log(rootNode);
      setError("");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  }, [value]);
  return (
    <Box
      width="100%"
      display="flex"
      height="600px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {showFunc && <GlobalSearch func pos="absolute" left="50px" top="50px" />}
      {showGlobal && <GlobalSearch pos="absolute" left="50px" top="450px" />}
      <Box
        width="60%"
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <TextareaAutosize
          style={{
            outline: "none",
            width: "100%",
            height: "300px",
            fontSize: 20,
            padding: 20,
          }}
          value={value}
          onChange={handleChange}
        />
        {error && (
          <Alert
            style={{ position: "absolute", bottom: 0, width: "101%" }}
            severity="error"
          >
            {error}
          </Alert>
        )}
      </Box>
      <Box display="flex">
        {/* <TemporaryDrawer data={DATA} /> */}
        <Button onClick={() => setShowFunc(!showFunc)}>Func Search</Button>
        <Button onClick={() => setShowGlobal(!showGlobal)}>
          Global Search
        </Button>
      </Box>
    </Box>
  );
};
