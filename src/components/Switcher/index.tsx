import { CustomPopover } from "../CustomPopover";
import { TemporaryDrawer } from "../Drawer";
import { useAppSelector } from "../../hooks";
import { getDrawer } from "../../store/codeSlice";

export const Switcher: React.FC<{ index: number; value: string }> = ({
  index,
  value,
}) => {
  const drawer = useAppSelector(getDrawer);

  return drawer ? (
    <TemporaryDrawer index={index} value={value} />
  ) : (
    <CustomPopover index={index} value={value} />
  );
};
