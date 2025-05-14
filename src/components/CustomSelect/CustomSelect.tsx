import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select"; // Make sure this is installed or adjust to your custom one

interface Option {
  label: string;
  value: number | string;
}

interface CustomSelectProps {
  name: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: any) => void; // external onChange
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  disabled,
  onChange,
}) => {
  const { control } = useFormContext();

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            classNames={{
              control: () =>
                "h-11 w-full rounded-lg border border-gray-300 bg-transparent text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800",
              menu: () =>
                "bg-white dark:bg-gray-800 border border-gray-200 mt-1 rounded-lg shadow-md",
              option: ({ isFocused, isSelected }) =>
                `px-4 py-2 cursor-pointer ${
                  isSelected
                    ? "bg-brand-500 text-white"
                    : isFocused
                    ? "bg-brand-100 dark:bg-gray-700"
                    : ""
                }`,
              placeholder: () => "text-gray-400",
              singleValue: () => "text-sm",
            }}
            options={options}
            isDisabled={disabled}
            placeholder={placeholder || "Select..."}
            value={
              options.find((option) => option.value === field.value) || null
            }
            onChange={(selectedOption) => {
              const value = selectedOption?.value;
              field.onChange(value); // react-hook-form update
              if (onChange) onChange(value); // external logic
            }}
          />
        )}
      />
    </div>
  );
};

export default CustomSelect;
