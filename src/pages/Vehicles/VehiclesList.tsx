import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import VehicleSearchForm from "./VehicleSearchForm";
import VehiclesTable from "./VehiclesTable";

export default function VehiclesList() {
  return (
    <>
      <PageMeta title="Vehicle list" description="All vehicle list" />
      <PageBreadcrumb pageTitle="Vehicles List" />
      <div className="space-y-6">
        <ComponentCard title="Vehicles">
          <div className="min-w-md flex">
            <VehicleSearchForm />
          </div>
          <VehiclesTable />
        </ComponentCard>
      </div>
    </>
  );
}
