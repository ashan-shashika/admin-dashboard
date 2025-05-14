import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Switch from "../form/switch/Switch";

type ControlledSwitchProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
  color?: "blue" | "gray";
};

const ControlledSwitch: React.FC<ControlledSwitchProps> = ({
  name,
  label,
  defaultChecked = false,
  color = "blue",
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked}
      render={({ field: { value, onChange } }) => (
        <Switch
          label={label}
          checked={value}
          onChange={onChange}
          color={color}
        />
      )}
    />
  );
};

export default ControlledSwitch;
