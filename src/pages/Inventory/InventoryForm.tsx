import { useForm, FormProvider } from "react-hook-form";
import CustomInputField from "../../components/form/input/CustomInputField";
import Button from "../../components/ui/button/Button";
import CustomSwitch from "../../components/customSwitch/customSwitch";

interface CreatePartInventoryInput {
  supplierPartId: string;
  condition: number;
  supplierId: number;
  binId: number;
  qrCodeInfo: string;
  description: string;
  searchableTags: string;
  groupId?: number;
  productTypeId?: number;
  brand?: string;
  replenishMinimum?: number;
  replenishMaxmimum?: number;
  quantityOnHand?: number;
  quantityReserved?: number;
  quantityAvailable?: number;
  retailPrice?: number;
  retailPriceLastUpdatedTime?: string;
  costExcludedTax?: number;
  costIncludedTax?: number;
  price2?: number;
  price3?: number;
  price4?: number;
  importedId?: number;
  vatFree?: boolean;
  doNotUpdateQuentity?: boolean;
  requiresSerialNumber?: boolean;
  priceLookup?: boolean;
}

const InventoryPartForm = () => {
  const methods = useForm<CreatePartInventoryInput>({
    defaultValues: {
      supplierPartId: "",
      condition: 0,
      supplierId: 0,
      binId: 0,
      qrCodeInfo: "",
      description: "",
      searchableTags: "",
      brand: "",
      replenishMinimum: 0,
      replenishMaxmimum: 0,
      quantityOnHand: 0,
      quantityReserved: 0,
      quantityAvailable: 0,
      retailPrice: 0,
      retailPriceLastUpdatedTime: "",
      costExcludedTax: 0,
      costIncludedTax: 0,
      price2: 0,
      price3: 0,
      price4: 0,
      importedId: 0,
      vatFree: false,
      doNotUpdateQuentity: false,
      requiresSerialNumber: false,
      priceLookup: false,
    },
  });

  const onSubmit = (data: CreatePartInventoryInput) => {
    console.log("Submitted data:", data);
    // Handle inventory part submission here
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6">Add Inventory Part</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex-1">
              <CustomInputField
                name="supplierPartId"
                label="Supplier Part ID"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="condition"
                label="Condition"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="supplierId"
                label="Supplier ID"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField name="binId" label="Bin ID" type="number" />
            </div>
            <div className="flex-1">
              <CustomInputField name="qrCodeInfo" label="QR Code Info" />
            </div>
            <div className="flex-1">
              <CustomInputField name="description" label="Description" />
            </div>
            <div className="flex-1">
              <CustomInputField name="searchableTags" label="Searchable Tags" />
            </div>
            <div className="flex-1">
              <CustomInputField name="groupId" label="Group ID" type="number" />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="productTypeId"
                label="Product Type ID"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField name="brand" label="Brand" />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="replenishMinimum"
                label="Replenish Minimum"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="replenishMaxmimum"
                label="Replenish Maximum"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="quantityOnHand"
                label="Quantity On Hand"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="quantityReserved"
                label="Quantity Reserved"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="quantityAvailable"
                label="Quantity Available"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="retailPrice"
                label="Retail Price"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="retailPriceLastUpdatedTime"
                label="Retail Price Last Updated Time"
                type="datetime-local"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="costExcludedTax"
                label="Cost Excl. Tax"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="costIncludedTax"
                label="Cost Incl. Tax"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomInputField name="price2" label="Price 2" type="number" />
            </div>
            <div className="flex-1">
              <CustomInputField name="price3" label="Price 3" type="number" />
            </div>
            <div className="flex-1">
              <CustomInputField name="price4" label="Price 4" type="number" />
            </div>
            <div className="flex-1">
              <CustomInputField
                name="importedId"
                label="Imported ID"
                type="number"
              />
            </div>
            <div className="flex-1">
              <CustomSwitch name="vatFree" label="VAT Free" color="blue" />
            </div>
            <div className="flex-1">
              <CustomSwitch
                name="doNotUpdateQuentity"
                label="Do Not Update Quantity"
                color="blue"
              />
            </div>
            <div className="flex-1">
              <CustomSwitch
                name="requiresSerialNumber"
                label="Requires Serial Number"
              />
            </div>
            <div className="flex-1">
              <CustomSwitch name="priceLookup" label="Price Lookup" />
            </div>
          </div>
          <div className="pt-4">
            <Button>Add Part</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default InventoryPartForm;
