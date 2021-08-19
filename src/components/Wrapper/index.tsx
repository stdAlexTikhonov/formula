import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { CustomList } from "../List";
import { mapping_list_types } from "./mapping";
import { useStyles } from "./styles";
import { getData } from "../../store/codeSlice";
import { useAppSelector } from "../../hooks";

type Item = {
  name: string;
  args_quantity?: number;
  arbitrary_args?: boolean;
  type?: string;
};

export const Wrapper: React.FC<{ type: string }> = ({ type }) => {
  const data = useAppSelector(getData);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Item[]>(
    data[type.toUpperCase() as keyof typeof data]
  );
  const classes = useStyles();

  useEffect(() => {
    setFiltered(() =>
      data[type.toUpperCase() as keyof typeof data].filter((item) =>
        item.name.includes(search)
      )
    );
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
        <CustomList items={filtered} type={type} />
      </Box>
    </Box>
  );
};
