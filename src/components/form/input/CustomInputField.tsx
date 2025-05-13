import { useFormContext, Controller } from "react-hook-form";
import Input, { InputProps } from "./InputField"; // adjust the import path as needed

interface CustomInputFieldProps extends InputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  label?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  name,
  control,
  ...props
}) => {
  const formContext = useFormContext();

  if (!formContext && !control) {
    throw new Error(
      "InputField must be used within a FormProvider or have a control prop"
    );
  }

  const { control: contextControl } = formContext || {};

  return (
    <Controller
      name={name}
      control={control || contextControl}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          {...props}
          error={!!error?.message}
          hint={error?.message || props.hint}
        />
      )}
    />
  );
};

export default CustomInputField;
