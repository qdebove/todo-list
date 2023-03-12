import { Color } from "../../constants/types";
import Spinner from "./Spinner";

type SpinnerContainerProps = {
  color: Color;
};

export default function SpinnerContainer({ color }: SpinnerContainerProps) {
  return (
    <div
      className={`absolute left-0 right-0 top-0 bottom-0 opacity-50 z-10 bg-${color} flex flex-col justify-center items-center`}
    >
      <Spinner color={color} />
    </div>
  );
}
