import { VisualBuilder } from "../VisualBuilder";
import Box from "@material-ui/core/Box";

export const App = () => {
  return (
    <Box display="flex" height="100vh" width="100%">
      <VisualBuilder />
    </Box>
  );
};
