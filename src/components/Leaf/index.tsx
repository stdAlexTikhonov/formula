import { TemporaryDrawer } from "../Drawer";

type Props = {
  value?: string;
  index?: number;
};

export const Leaf: React.FC<Props> = ({ value = "", index }) => {
  return <TemporaryDrawer index={index || 0} value={value} />;
};
