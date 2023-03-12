import { useEffect, useRef } from "react";

type UseClickOutsideProps = {
  clickedOutsideCallback: () => any;
};

export default function useClickOutside({
  clickedOutsideCallback,
}: UseClickOutsideProps) {
  const ref = useRef<any | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!!ref.current && !ref.current.contains(event.target)) {
        clickedOutsideCallback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { ref };
}
