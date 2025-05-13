import { useState } from "react";
import Badge from "../../components/ui/badge/Badge";
import Button from "../../components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { PencilIcon } from "../../icons";
import UserModal from "../UserModal";

interface User {
  id: number;
  user: {
    image: string;
    name: string;
  };
  role: string;
  email: string;
  phone: string;
  actions: string[];
}

const tableData: User[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Kwame Asante",
    },
    role: "super-admin",
    email: "kwame.asante@autocare.gh",
    phone: "+233 24 123 4567", // Ghana
    actions: ["edit", "view", "delete"],
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Amina Diop",
    },
    role: "admin",
    email: "amina.diop@autocare.sn",
    phone: "+221 77 234 5678", // Senegal
    actions: ["edit", "view", "delete"],
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-19.jpg",
      name: "Tunde Okafor",
    },
    role: "inspector",
    email: "tunde.okafor@autocare.ng",
    phone: "+234 80 345 6789", // Nigeria
    actions: ["edit", "view", "delete"],
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Naledi Banda",
    },
    role: "mechanic",
    email: "naledi.banda@autocare.bw",
    phone: "+267 71 456 7890", // Botswana
    actions: ["edit", "view", "delete"],
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Jabari Kibet",
    },
    role: "parts-manager",
    email: "jabari.kibet@autocare.ke",
    phone: "+254 70 567 8901", // Kenya
    actions: ["edit", "view", "delete"],
  },
  {
    id: 6,
    user: {
      image: "/images/user/user-22.jpg",
      name: "Fatoumata Camara",
    },
    role: "service-advisor",
    email: "fatoumata.c@autocare.gn",
    phone: "+224 62 678 9012", // Guinea
    actions: ["edit", "view", "delete"],
  },
  {
    id: 7,
    user: {
      image: "/images/user/user-23.jpg",
      name: "Thando Mbeki",
    },
    role: "admin",
    email: "thando.m@autocare.za",
    phone: "+27 83 789 0123", // South Africa
    actions: ["edit", "view", "delete"],
  },
  {
    id: 8,
    user: {
      image: "/images/user/user-24.jpg",
      name: "Omar Hassan",
    },
    role: "quality-control",
    email: "omar.hassan@autocare.eg",
    phone: "+20 10 890 1234", // Egypt
    actions: ["edit", "view", "delete"],
  },
  {
    id: 9,
    user: {
      image: "/images/user/user-25.jpg",
      name: "Zahara Abdi",
    },
    role: "super-admin",
    email: "zahara.a@autocare.so",
    phone: "+252 63 901 2345", // Somalia
    actions: ["edit", "view", "delete"],
  },
  {
    id: 10,
    user: {
      image: "/images/user/user-26.jpg",
      name: "Kofi Mensah",
    },
    role: "inspector",
    email: "kofi.mensah@autocare.tg",
    phone: "+228 90 012 3456", // Togo
    actions: ["edit", "view", "delete"],
  },
];

export default function UsersTable() {
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
                User
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Email
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Phone
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Role
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
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.user.image}
                        alt={order.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      {/* <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span> */}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.email}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.phone}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.role === "super-admin"
                        ? "error" // Highest privilege - red
                        : order.role === "admin"
                        ? "primary" // Primary brand color for admins
                        : order.role === "inspector"
                        ? "warning" // Orange/yellow for inspectors
                        : order.role === "mechanic"
                        ? "success" // Green for mechanics
                        : order.role === "parts-manager"
                        ? "info" // Blue for parts
                        : order.role === "service-advisor"
                        ? "primary" // Same as admin (customer-facing)
                        : order.role === "quality-control"
                        ? "warning" // Same as inspector (oversight)
                        : "dark" // Fallback
                    }
                  >
                    {order.role}
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
        <UserModal isOpen={toggleModal} closeModal={() => setModal(false)} />
      </div>
    </div>
  );
}
