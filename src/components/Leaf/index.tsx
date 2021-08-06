import { TemporaryDrawer } from "../Drawer";
import { DATA } from "../../data";
import Typography from "@material-ui/core/Typography";

type Props = {
  value?: string | null;
  index?: number;
};

export const Leaf: React.FC<Props> = ({ value = null, index }) => {
  return value ? (
    <Typography>{value}</Typography>
  ) : (
    <TemporaryDrawer data={DATA} index={index || 0} />
  );
};
