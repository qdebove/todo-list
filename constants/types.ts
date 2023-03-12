export type Color = "primary" | "secondary" | "tertiary";
export type ColorableElement = {
  color: Color;
  disabled?: boolean;
};

export type FieldError = {
  field: string;
  message: string;
};
