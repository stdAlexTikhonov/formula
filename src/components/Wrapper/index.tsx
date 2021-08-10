import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import List from "../List";
import { mapping_list_types } from "./mapping";
import { useStyles } from "./styles";

export const Wrapper: React.FC<{ items: string[]; type: string }> = ({
  items,
  type,
}) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(items);
  const classes = useStyles();

  useEffect(() => {
    setFiltered(() => items.filter((item) => item.includes(search)));
  }, [search]);

  return (
    <Box className={classes.wrapper}>
      <TextField
        label={mapping_list_types.get(type)}
        className={classes.text}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box className={classes.box}>
        <List items={filtered} type={type} />
      </Box>
    </Box>
  );
};
