import { TemporaryDrawer } from "../Drawer";
import { DATA } from "../../data";

type Props = {
  value?: string;
  index?: number;
};

export const Leaf: React.FC<Props> = ({ value = "", index }) => {
  return <TemporaryDrawer data={DATA} index={index || 0} value={value} />;
};
