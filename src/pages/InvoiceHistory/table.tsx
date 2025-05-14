import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";
import { invoiceData } from "./data";

export default function PartInvoiceTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Purchase ID
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Part Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status ID
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Cost Price
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date Received
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date Invoiced
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                No. of Items
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {invoiceData.map((invoice) => (
              <TableRow key={invoice.purchaseId}>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  {invoice.purchaseId}
                </TableCell>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  {invoice.partName}
                </TableCell>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  <Badge
                    size="sm"
                    color={
                      invoice.purchasingStatusId === "status1"
                        ? "info"
                        : invoice.purchasingStatusId === "status2"
                        ? "warning"
                        : invoice.purchasingStatusId === "status3"
                        ? "success"
                        : "primary"
                    }
                  >
                    {invoice.purchasingStatusId}
                  </Badge>
                </TableCell>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  ${invoice.costPrice.toFixed(2)}
                </TableCell>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  {new Date(invoice.dateReceived).toLocaleDateString()}
                </TableCell>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  {new Date(invoice.dateInvoiced).toLocaleDateString()}
                </TableCell>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-700 dark:text-white/90">
                  {invoice.noOfItemsInLot}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
