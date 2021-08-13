import { TemporaryDrawer } from "../Drawer";

type Props = {
  index?: number;
};

export const Leaf: React.FC<Props> = ({ index }) => {
  return <TemporaryDrawer index={index || 0} />;
};
