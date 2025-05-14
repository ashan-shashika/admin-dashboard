import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { MoreDotIcon } from "../../icons";
import { partsData } from "./data";

import { Dropdown } from "../../components/ui/dropdown/Dropdown";
import { DropdownItem } from "../../components/ui/dropdown/DropdownItem";
import { Modal } from "../../components/ui/modal";
import PartInvoiceTable from "../InvoiceHistory/table";

export default function InventoryTable() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [showHistory, setHistory] = useState(false);

  function toggleDropdown(id: number | null) {
    setIsOpen(id);
  }

  function closeDropdown() {
    setIsOpen(null);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Item Code
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Description
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Brand
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Type
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Quantity On Hand
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Quantity Available
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Retail Price
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-medium text-theme-xs text-gray-500 dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {partsData.map((part) => (
              <TableRow key={part.id}>
                <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                  {part.itemCode}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {part.description}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {part.brand}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {part.type}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {part.quantityOnHand}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {part.quantityAvailable}
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                  {part.retailPrice}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(part.id)}
                  >
                    <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
                  </button>
                  <Dropdown
                    isOpen={isOpen === part.id}
                    onClose={closeDropdown}
                    className="w-40 p-2"
                  >
                    <DropdownItem
                      onItemClick={() => {
                        closeDropdown();
                        window.open(
                          `/part-history`,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                      Purchase History
                    </DropdownItem>
                    <DropdownItem
                      onItemClick={closeDropdown}
                      className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                      View
                    </DropdownItem>
                    <DropdownItem
                      onItemClick={closeDropdown}
                      className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                      Edit
                    </DropdownItem>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Optional: Edit Modal */}
        {/* <PartModal isOpen={toggleModal} closeModal={() => setModal(false)} /> */}

        <Modal
          isOpen={showHistory}
          onClose={() => setHistory(false)}
          className="max-w-[1200px] m-4"
        >
          <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
            <div className="px-2 pr-14">
              <PartInvoiceTable />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
