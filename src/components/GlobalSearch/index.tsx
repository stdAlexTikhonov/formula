import TextField from "@material-ui/core/TextField";
import React from "react";
import Box from "@material-ui/core/Box";
import List from "../List";
import { DATA } from "../../data";
import { Divider } from "@material-ui/core";

const _keys = ["FACTS", "MEASURES", "VARIABLES"];

type SOME_KEYS = "FACTS" | "MEASURES" | "VARIABLES";

export const GlobalSearch: React.FC<{
  func?: boolean;
  pos: string;
  left: string;
  top: string;
}> = ({ func, pos, left, top }) => {
  return (
    <Box width="270px" position={pos} left={left} top={top}>
      <TextField label={"Поиск"} style={{ width: "90%", margin: 10 }} />
      <Box overflow="auto" maxHeight="300px">
        {func ? (
          <List items={DATA["FUNCTIONS"]} />
        ) : (
          _keys.map((item: any) => (
            <>
              <List items={DATA[item as SOME_KEYS]} />
              <Divider />
            </>
          ))
        )}
      </Box>
    </Box>
  );
};
