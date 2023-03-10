import { UseFormRegisterReturn } from "react-hook-form";

export interface iInput {
  children: React.ReactNode;
  type: string;
  register?: UseFormRegisterReturn<string>;
  errorInput?: any;
  placeHolder: string;
  defaultValue?: string;
}
