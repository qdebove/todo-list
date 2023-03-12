import { useEffect, useState } from "react";
import { FieldError } from "../constants/types";

export default function useErrors<T>() {
  const [fieldErrors, setFieldErrors] = useState([] as FieldError[]);
  const [errors, setErrors] = useState({} as T);

  useEffect(
    () =>
      setErrors(
        fieldErrors.reduce(
          (acc, { field, message }) => ({ ...acc, [field]: message }),
          {} as T
        )
      ),
    [fieldErrors]
  );

  return { errors, setFieldErrors };
}
