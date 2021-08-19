import { CustomPopover } from "../CustomPopover";
import { TemporaryDrawer } from "../Drawer";
import { useAppSelector } from "../../hooks";
import { getDrawer } from "../../store/codeSlice";

export const Switcher: React.FC<{ index: number }> = ({ index }) => {
  const drawer = useAppSelector(getDrawer);

  return drawer ? (
    <TemporaryDrawer index={index} />
  ) : (
    <CustomPopover index={index} />
  );
};
