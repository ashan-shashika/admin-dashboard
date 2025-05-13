import { useState } from "react";
import Button from "../../components/ui/button/Button";
import Badge from "../../components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { PencilIcon } from "../../icons";
// import VehicleModal from "../VehicleModal";

interface Vehicle {
  id: number;
  vehicle: {
    image: string;
    number: string;
  };
  make: string;
  year: number;
  owner: string;
  lastServiced: string;
  underWarranty: boolean;
  actions: string[];
}

const tableData: Vehicle[] = [
  {
    id: 1,
    vehicle: {
      image:
        "https://img.goodfon.com/original/2048x1536/7/a7/badfon-volvo-fh-580-globetrotter.jpg", // Volvo truck
      number: "GT 1234 AB",
    },
    make: "Volvo",
    year: 2022,
    owner: "Kwame Asante",
    lastServiced: "2023-10-15",
    underWarranty: true,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 2,
    vehicle: {
      image: "https://live.staticflickr.com/1762/42474704485_d8b471b56b_b.jpg", // Toyota truck
      number: "NG 5678 CD",
    },
    make: "Toyota",
    year: 2021,
    owner: "Amina Diop",
    lastServiced: "2023-09-22",
    underWarranty: false,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 3,
    vehicle: {
      image:
        "https://images.pexels.com/photos/18982322/pexels-photo-18982322/free-photo-of-golden-renault-trucks-t.jpeg", // Renault truck
      number: "GH 9012 EF",
    },
    make: "Volvo",
    year: 2023,
    owner: "Tunde Okafor",
    lastServiced: "2023-11-05",
    underWarranty: true,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 4,
    vehicle: {
      image: "https://live.staticflickr.com/8240/8577757261_d7d92cfa2b_b.jpg", // Scania truck
      number: "KE 3456 GH",
    },
    make: "Toyota",
    year: 2020,
    owner: "Naledi Banda",
    lastServiced: "2023-08-30",
    underWarranty: false,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 5,
    vehicle: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Jentone_Freight_Services_2002_Scania_124L_truck_with_Bulkhaul_container_on_a_skeleton_trailer%2C_22_March_2009.jpg", // Scania truck
      number: "ZA 7890 IJ",
    },
    make: "Volvo",
    year: 2021,
    owner: "Jabari Kibet",
    lastServiced: "2023-10-28",
    underWarranty: true,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 6,
    vehicle: {
      image: "https://live.staticflickr.com/5332/9417314330_de0fc25f51_b.jpg", // Volvo truck
      number: "SN 1234 KL",
    },
    make: "Toyota",
    year: 2022,
    owner: "Fatoumata Camara",
    lastServiced: "2023-11-12",
    underWarranty: true,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 7,
    vehicle: {
      image:
        "https://images.pexels.com/photos/18982314/pexels-photo-18982314/free-photo-of-renault-trucks-t-with-open-doors.jpeg", // Renault truck
      number: "BW 5678 MN",
    },
    make: "Volvo",
    year: 2023,
    owner: "Thando Mbeki",
    lastServiced: "2023-09-18",
    underWarranty: true,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 8,
    vehicle: {
      image: "https://live.staticflickr.com/1762/42474704485_d8b471b56b_b.jpg", // Toyota truck
      number: "EG 9012 OP",
    },
    make: "Toyota",
    year: 2020,
    owner: "Omar Hassan",
    lastServiced: "2023-08-05",
    underWarranty: false,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 9,
    vehicle: {
      image:
        "https://img.goodfon.com/original/2048x1536/7/a7/badfon-volvo-fh-580-globetrotter.jpg", // Volvo truck
      number: "SO 3456 QR",
    },
    make: "Volvo",
    year: 2022,
    owner: "Zahara Abdi",
    lastServiced: "2023-10-10",
    underWarranty: true,
    actions: ["edit", "view", "delete"],
  },
  {
    id: 10,
    vehicle: {
      image: "https://live.staticflickr.com/5332/9417314330_de0fc25f51_b.jpg", // Volvo truck
      number: "TG 7890 ST",
    },
    make: "Toyota",
    year: 2021,
    owner: "Kofi Mensah",
    lastServiced: "2023-11-01",
    underWarranty: false,
    actions: ["edit", "view", "delete"],
  },
];

export default function VehiclesTable() {
  const [toggleModal, setModal] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Vehicle
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Make
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Year
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Owner
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Last Serviced
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Under Warranty
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                      <img
                        width={60}
                        height={80}
                        src={vehicle.vehicle.image}
                        alt={vehicle.vehicle.number}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {vehicle.vehicle.number}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {vehicle.make}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {vehicle.year}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {vehicle.owner}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {vehicle.lastServiced}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <Badge
                    size="sm"
                    color={vehicle.underWarranty ? "success" : "dark"}
                  >
                    {vehicle.underWarranty ? "Yes" : "No"}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2"
                    onClick={() => setModal(true)}
                  >
                    <PencilIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <VehicleModal isOpen={toggleModal} closeModal={() => setModal(false)} /> */}
      </div>
    </div>
  );
}
