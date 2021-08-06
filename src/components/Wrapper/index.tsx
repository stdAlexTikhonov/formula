import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import List from "../List";

export const Wrapper: React.FC<{ items: string[]; type: string }> = ({
  items,
  type,
}) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(items);
  useEffect(() => {
    setFiltered((prev) => items.filter((item) => item.includes(search)));
  }, [search]);

  return (
    <Box width="100%" overflow="hidden">
      <TextField
        label={type}
        style={{ width: "90%", margin: 10 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box maxHeight="300px" overflow="auto" width="100%">
        <List items={filtered} type={type} />
      </Box>
    </Box>
  );
};
