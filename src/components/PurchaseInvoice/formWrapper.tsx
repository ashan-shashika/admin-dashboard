// src/components/PurchaseForm.tsx

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { partList } from "./partdata";
import CustomInputField from "../form/input/CustomInputField";
import Button from "../ui/button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import { TrashBinIcon } from "../../icons";

interface PartEntry {
  partId: number | "";
  partNo: string;
  noOfItemsInLot: number | "";
  costPrice: number | "";
  saved: boolean;
}

export default function PurchaseForm() {
  const methods = useForm({
    defaultValues: {
      purchaseInvoiceId: "",
      purchasingStatusId: "",
      dateInvoiced: "",
      dateReceived: "",
      parts: [],
    },
  });

  const { handleSubmit, setValue, getValues } = methods;

  const [partEntries, setPartEntries] = useState<PartEntry[]>([
    { partId: "", partNo: "", noOfItemsInLot: "", costPrice: "", saved: false },
  ]);

  const handlePartChange = (index: number, partId: number) => {
    const selectedPart = partList.find((p) => p.id === partId);
    const updated = [...partEntries];
    updated[index].partId = partId;
    updated[index].partNo = selectedPart ? `PART-${selectedPart.id}` : "";
    setPartEntries(updated);
    setValue(`parts.${index}.partId`, partId);
    setValue(`parts.${index}.partNo`, updated[index].partNo);
  };

  const handleSavePartRow = (index: number) => {
    const selectedPartId = getValues(`parts.${index}.partId`);
    const selectedPart = partList.find((p) => p.id === selectedPartId);
    const partNo = selectedPart ? `PART-${selectedPart.id}` : "";

    setValue(`parts.${index}.partNo`, partNo);

    const updated = [...partEntries];
    updated[index].saved = true;
    updated[index].partId = selectedPartId;
    updated[index].partNo = partNo;
    setPartEntries(updated);

    setValue(
      "parts",
      updated.map((entry, i) => ({
        partId: entry.partId,
        partNo: getValues(`parts.${i}.partNo`),
        noOfItemsInLot: getValues(`parts.${i}.noOfItemsInLot`),
        costPrice: getValues(`parts.${i}.costPrice`),
      }))
    );
  };

  const handleAddPartRow = () => {
    setPartEntries((prev) => [
      ...prev,
      {
        partId: "",
        partNo: "",
        noOfItemsInLot: "",
        costPrice: "",
        saved: false,
      },
    ]);
  };

  const handleDeletePartRow = (index: number) => {
    const updated = [...partEntries];
    updated.splice(index, 1); // remove one at index

    setPartEntries(updated);

    // Remove corresponding form values
    const currentParts = getValues("parts") || [];
    currentParts.splice(index, 1);
    setValue("parts", currentParts);
  };

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Step 1: Invoice & Status */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Invoice Details</h2>
          <div className="grid grid-cols-4 gap-4 items-end">
            <div className="flex-1">
              <CustomInputField
                name="purchaseInvoiceId"
                label="Purchase Invoice ID"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="purchasingStatusId"
                label="Purchasing Status ID"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="dateInvoiced"
                label="Date Invoiced"
                type="date"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="dateReceived"
                label="Date Received"
                type="date"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Part Entries */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Parts Entry</h2>

          {partEntries.map((entry, index) => (
            <div
              key={index}
              className="border p-4 rounded bg-gray-50 space-y-4"
            >
              {/* Row 1: Part Selector */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CustomSelect
                    name={`parts.${index}.partId`}
                    label="Select Part"
                    options={partList.map((part) => ({
                      label: part.name,
                      value: part.id,
                    }))}
                    placeholder="-- Select --"
                    disabled={entry.saved}
                    onChange={(value) => {
                      const selectedPart = partList.find(
                        (p) => p.id === Number(value)
                      );
                      setValue(
                        `parts.${index}.partNo`,
                        selectedPart ? `PART-${selectedPart.id}` : ""
                      );
                    }}
                  />
                </div>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => handleDeletePartRow(index)}
                  className="ml-4 text-red-800 text-sm hover:underline"
                >
                  <TrashBinIcon />
                </button>
              </div>

              {/* Row 2: Inputs */}
              <div className="grid grid-cols-4 gap-4 items-end">
                <div className="flex-1">
                  <CustomInputField
                    name={`parts.${index}.partNo`}
                    label="Part No"
                    disabled={entry.saved}
                    //   readOnly
                  />
                </div>
                <div className="flex-1">
                  <CustomInputField
                    name={`parts.${index}.noOfItemsInLot`}
                    label="No. of Items"
                    type="number"
                    disabled={entry.saved}
                  />
                </div>
                <div className="flex-1">
                  <CustomInputField
                    name={`parts.${index}.costPrice`}
                    label="Cost Price"
                    type="number"
                    //   step="0.01"
                    disabled={entry.saved}
                  />
                </div>
                <div className="flex-1">
                  <div className="pt-6">
                    <Button size="sm" onClick={() => handleSavePartRow(index)}>
                      {entry.saved ? "Saved" : "Save"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Button onClick={handleAddPartRow} variant="outline">
            Add +
          </Button>
        </div>

        {/* Submit Button */}
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}
