import { CustomPopover } from "../CustomPopover";

type Props = {
  value?: string;
  index?: number;
};

export const Leaf: React.FC<Props> = ({ value = "", index }) => {
  return <CustomPopover index={index || 0} value={value} />;
};
