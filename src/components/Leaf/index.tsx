import { Switcher } from "../Switcher";

type Props = {
  value?: string;
  index?: number;
};

export const Leaf: React.FC<Props> = ({ value = "", index }) => {
  return <Switcher index={index || 0} value={value} />;
};
