import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import UsersTable from "./UsersTable";
import UserSearchForm from "./SearchForm";

export default function UsersList() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Users List" />
      <div className="space-y-6">
        <ComponentCard title="Users">
          <div className="min-w-md flex">
            <UserSearchForm />
          </div>
          <UsersTable />
        </ComponentCard>
      </div>
    </>
  );
}
