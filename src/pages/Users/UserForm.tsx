import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider } from "react-hook-form";
import CustomInputField from "../../components/form/input/CustomInputField";

// 1. Define Zod validation schema
const userSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone must be less than 15 digits")
    .regex(/^[0-9+]+$/, "Phone can only contain numbers and +"),
});

// 2. Infer TypeScript type from schema
type UserFormValues = z.infer<typeof userSchema>;

const UserCreateForm = () => {
  // 3. Initialize form with Zod resolver
  const methods = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: UserFormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically call your API to create the user
    alert(`User created: ${data.firstName} ${data.lastName}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Create New User
      </h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <CustomInputField
                name="firstName"
                label="First Name"
                placeholder="John"
              />
              <CustomInputField
                name="lastName"
                label="Last Name"
                placeholder="Doe"
              />
            </div>

            <CustomInputField
              name="email"
              type="email"
              label="Email"
              placeholder="john.doe@example.com"
            />

            <CustomInputField
              name="phone"
              label="Phone"
              placeholder="+1234567890"
            />

            <button
              type="submit"
              className="w-full h-11 px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-brand-500/20 dark:focus:ring-brand-800/50 transition-colors"
              disabled={methods.formState.isSubmitting}
            >
              {methods.formState.isSubmitting ? "Creating..." : "Create User"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default UserCreateForm;
