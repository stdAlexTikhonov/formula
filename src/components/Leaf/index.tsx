import { CustomPopover } from "../CustomPopover";
import { CustomDrawer } from "../Drawer";
import { useAppSelector } from "../../hooks";
import { getDrawer } from "../../store/codeSlice";

export const Leaf: React.FC<{ index: number }> = ({ index }) => {
  const drawer = useAppSelector(getDrawer);

  return drawer ? (
    <CustomDrawer index={index} />
  ) : (
    <CustomPopover index={index} />
  );
};
