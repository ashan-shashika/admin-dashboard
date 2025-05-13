import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider } from "react-hook-form";
import { Modal } from "../components/ui/modal";
import Button from "../components/ui/button/Button";
import CustomInputField from "../components/form/input/CustomInputField";

type UserModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export default function UserModal({ isOpen, closeModal }: UserModalProps) {
  const handleSave = () => {};

  const userSchema = z.object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be less than 50 characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 50 characters"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    phone: z
      .string()
      .min(10, "Phone must be at least 10 digits")
      .max(15, "Phone must be less than 15 digits")
      .regex(/^[0-9+]+$/, "Phone can only contain numbers and +"),
  });

  // 2. Infer TypeScript type from schema
  type UserFormValues = z.infer<typeof userSchema>;

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
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit User Information
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update user details to keep user profile up-to-date.
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  User Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <CustomInputField
                      name="firstName"
                      label="First Name"
                      placeholder="John"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <CustomInputField
                      name="lastName"
                      label="Last Name"
                      placeholder="Doe"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <CustomInputField
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <CustomInputField
                      name="phone"
                      label="Phone"
                      placeholder="+1234567890"
                    />
                  </div>

                  {/* <div className="col-span-2">
                  <Label>Bio</Label>
                  <Input type="text" value="Team Manager" />
                </div> */}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
}
