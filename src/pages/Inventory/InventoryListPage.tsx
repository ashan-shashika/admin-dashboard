import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import InventoryTable from "./InventoryTable";

export default function InventoryListPage() {
  return (
    <>
      <PageMeta title="Vehicle list" description="All vehicle list" />
      <PageBreadcrumb pageTitle="Inventory Managment" />
      <div className="space-y-6">
        <ComponentCard title="Inventory List">
          <InventoryTable />
        </ComponentCard>
      </div>
    </>
  );
}
