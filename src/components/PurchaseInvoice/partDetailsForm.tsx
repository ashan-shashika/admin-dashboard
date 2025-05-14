// src/components/Step2PartEntries.tsx

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { partList } from "./partdata";
import CustomInputField from "../form/input/CustomInputField";

interface PartEntry {
  partId: number | "";
  partNo: string;
  noOfItemsInLot: number | "";
  costPrice: number | "";
  saved: boolean;
}

export default function Step2PartEntries() {
  const { setValue, getValues } = useFormContext();
  const [partEntries, setPartEntries] = useState<PartEntry[]>([
    { partId: "", partNo: "", noOfItemsInLot: "", costPrice: "", saved: false },
  ]);

  const handlePartChange = (index: number, partId: number) => {
    const selectedPart = partList.find((p) => p.id === partId);
    const updated = [...partEntries];
    updated[index].partId = partId;
    updated[index].partNo = selectedPart ? `PART-${selectedPart.id}` : "";
    setPartEntries(updated);

    // Set in form context
    setValue(`parts.${index}.partId`, partId);
    setValue(`parts.${index}.partNo`, updated[index].partNo);
  };

  const handleSave = (index: number) => {
    const updated = [...partEntries];
    updated[index].saved = true;
    setPartEntries(updated);

    // Sync all parts to form state
    setValue(
      "parts",
      updated.map((entry) => ({
        partId: entry.partId,
        partNo: entry.partNo,
        noOfItemsInLot: getValues(`parts.${index}.noOfItemsInLot`),
        costPrice: getValues(`parts.${index}.costPrice`),
      }))
    );
  };

  const handleAddNew = () => {
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

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Parts Entry</h3>

      {partEntries.map((entry, index) => (
        <div key={index} className="border p-4 rounded bg-gray-50 space-y-4">
          {/* Row 1: Part Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Part
            </label>
            <select
              className="input w-full"
              value={entry.partId}
              onChange={(e) =>
                handlePartChange(index, parseInt(e.target.value))
              }
              disabled={entry.saved}
            >
              <option value="">-- Select --</option>
              {partList.map((part) => (
                <option key={part.id} value={part.id}>
                  {part.name}
                </option>
              ))}
            </select>
          </div>

          {/* Row 2: Inputs */}
          <div className="grid grid-cols-4 gap-4 items-end">
            <CustomInputField name={`parts.${index}.partNo`} label="Part No" />
            <CustomInputField
              name={`parts.${index}.noOfItemsInLot`}
              label="No. of Items"
              type="number"
              disabled={entry.saved}
            />
            <CustomInputField
              name={`parts.${index}.costPrice`}
              label="Cost Price"
              type="number"
              disabled={entry.saved}
            />
            <div className="pt-6">
              <button
                type="button"
                onClick={() => handleSave(index)}
                className="btn btn-success w-full"
                disabled={entry.saved}
              >
                {entry.saved ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add New Part Entry */}
      <button type="button" onClick={handleAddNew} className="btn btn-primary">
        Add +
      </button>
    </div>
  );
}
