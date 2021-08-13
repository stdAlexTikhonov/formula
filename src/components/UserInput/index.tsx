import { TextField, Button, Box } from "@material-ui/core";

export const UserInput = () => {
  return (
    <Box display="flex">
      <TextField
        style={{ width: 200, alignSelf: "center" }}
        placeholder="Пользовательский ввод"
      />
      <Button>Ok</Button>
    </Box>
  );
};
