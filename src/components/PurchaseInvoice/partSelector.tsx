// src/components/Step2PartEntries.tsx

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { partList } from "./partdata";

interface PartEntry {
  partId: number | "";
  partNo: string;
  noOfItemsInLot: number | "";
  costPrice: number | "";
  saved: boolean;
}

export default function Step2PartEntries() {
  const { setValue } = useFormContext();
  const [partEntries, setPartEntries] = useState<PartEntry[]>([
    { partId: "", partNo: "", noOfItemsInLot: "", costPrice: "", saved: false },
  ]);

  const handlePartChange = (index: number, partId: number) => {
    const selectedPart = partList.find((p) => p.id === partId);
    const updated = [...partEntries];
    updated[index].partId = partId;
    updated[index].partNo = selectedPart ? `PART-${selectedPart.id}` : "";
    setPartEntries(updated);
  };

  const handleChange = (index: number, field: keyof PartEntry, value: any) => {
    const updated = [...partEntries];
    updated[index][field] = value;
    setPartEntries(updated);
  };

  const handleSave = (index: number) => {
    const updated = [...partEntries];
    updated[index].saved = true;
    setPartEntries(updated);

    // Sync with react-hook-form
    setValue(
      `parts`,
      updated.map((entry) => ({
        partId: entry.partId,
        partNo: entry.partNo,
        noOfItemsInLot: entry.noOfItemsInLot,
        costPrice: entry.costPrice,
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
          {/* Row 1: Dropdown */}
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
            <div>
              <label className="block text-sm font-medium mb-1">Part No</label>
              <input
                type="text"
                value={entry.partNo}
                className="input w-full"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                No. of Items
              </label>
              <input
                type="number"
                className="input w-full"
                value={entry.noOfItemsInLot}
                onChange={(e) =>
                  handleChange(index, "noOfItemsInLot", Number(e.target.value))
                }
                disabled={entry.saved}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Cost Price
              </label>
              <input
                type="number"
                step="0.01"
                className="input w-full"
                value={entry.costPrice}
                onChange={(e) =>
                  handleChange(index, "costPrice", Number(e.target.value))
                }
                disabled={entry.saved}
              />
            </div>

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

      {/* Add New Button */}
      <button type="button" onClick={handleAddNew} className="btn btn-primary">
        Add +
      </button>
    </div>
  );
}
