// src/components/Step1Form.tsx

import { useFormContext } from "react-hook-form";

export default function Step1Form() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <input
        {...register("purchaseInvoiceId")}
        placeholder="Purchase Invoice ID"
        className="input"
      />
      <input
        type="number"
        {...register("purchasingStatusId")}
        placeholder="Purchasing Status ID"
        className="input"
      />
      <input
        type="datetime-local"
        {...register("dateInvoiced")}
        className="input"
      />
      <input
        type="datetime-local"
        {...register("dateReceived")}
        className="input"
      />
    </div>
  );
}
