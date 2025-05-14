import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import InventoryPartForm from "./InventoryForm";

export default function InventoryPage() {
  return (
    <>
      <PageMeta title="Vehicle list" description="All vehicle list" />
      <PageBreadcrumb pageTitle="Inventory Managment" />
      <div className="space-y-6">
        <ComponentCard title="Add Inventory">
          <InventoryPartForm />
        </ComponentCard>
      </div>
    </>
  );
}
