import { useState } from "react";

export default function useModelCreation<T>(initialData: Partial<T>) {
  type S = Partial<T>;
  const [inputValues, setInputValues] = useState<S>(initialData);

  const handleChange = (attribute: keyof S, value: any) =>
    setInputValues({ ...inputValues, [attribute]: value });

  const resetModel = (initialData: S) => setInputValues(initialData);

  return {
    handleChange,
    inputValues,
    resetModel,
  };
}
