import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import CustomInputField from "../../components/form/input/CustomInputField";
import Button from "../../components/ui/button/Button";

interface SearchFormValues {
  name: string;
  email: string;
}

const UserSearchForm = () => {
  const methods = useForm<SearchFormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: SearchFormValues) => {
    console.log(data);
    // Handle search logic here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <CustomInputField
              name="name"
              placeholder="Enter name"
              label="Name"
            />
          </div>

          <div className="flex-1">
            <CustomInputField
              name="email"
              type="email"
              placeholder="Enter email"
              label="Email"
            />
          </div>

          <div>
            <Button size="sm">Search</Button>
            {/* <button

              type="submit"
              className="h-11 px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-brand-500/20 dark:focus:ring-brand-800/50 transition-colors"
            >
              Search
            </button> */}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UserSearchForm;
