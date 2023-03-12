import { PlusIcon } from "@heroicons/react/24/outline";
import { ICON_SIZE } from "../../constants/sizes";
import { Color } from "../../constants/types";
import FabButton from "./FabButton";

type NavigationFabButtonProps = {
  color: Color;
  handleCreate: () => any;
};

export default function CreateFabButton({
  color,
  handleCreate,
}: NavigationFabButtonProps) {
  return (
    <div className="fixed bottom-4 right-4 shadow-xl rounded-full p-0 m-0 bg-transparent border-2 border-white">
      <FabButton
        onClickHandler={handleCreate}
        color={color}
        icon={
          <PlusIcon
            className="text-white"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        }
      />
    </div>
  );
}
