import { Switcher } from "../Switcher";

type Props = {
  index?: number;
};

export const Leaf: React.FC<Props> = ({ index }) => {
  return <Switcher index={index || 0} />;
};
