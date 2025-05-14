import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import PartInvoiceTable from "./table";

export default function InvoiceHistoryPage() {
  return (
    <>
      <PageMeta title="Vehicle list" description="All vehicle list" />
      <PageBreadcrumb pageTitle="Invoice History" />
      <div className="space-y-6">
        <ComponentCard title="History">
          <PartInvoiceTable />
        </ComponentCard>
      </div>
    </>
  );
}
