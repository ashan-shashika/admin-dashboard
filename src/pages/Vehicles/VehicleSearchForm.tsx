import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import CustomInputField from "../../components/form/input/CustomInputField";
import Button from "../../components/ui/button/Button";

interface VehicleSearchFormValues {
  vehicleNumber: string;
  make: string;
  year: string;
}

const VehicleSearchForm = () => {
  const methods = useForm<VehicleSearchFormValues>({
    defaultValues: {
      vehicleNumber: "",
      make: "",
      year: "",
    },
  });

  const onSubmit = (data: VehicleSearchFormValues) => {
    console.log(data);
    // Handle vehicle search logic here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <CustomInputField
              name="vehicleNumber"
              placeholder="Enter vehicle number"
              label="Vehicle Number"
            />
          </div>

          <div className="flex-1">
            <CustomInputField
              name="make"
              placeholder="Enter make (e.g. Volvo, Toyota)"
              label="Make"
            />
          </div>

          <div className="flex-1">
            <CustomInputField
              name="year"
              placeholder="Enter year"
              label="Year"
            />
          </div>

          <div>
            <Button size="sm">Search</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default VehicleSearchForm;
