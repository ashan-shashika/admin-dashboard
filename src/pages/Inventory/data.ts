// src/data/partsData.ts

export interface VehiclePart {
  id: number;
  itemCode: string;
  brand: "Volvo" | "Toyota";
  type: "New" | "Used" | "FOC"; // New, Used, or FOC
  description: string;
  quantityOnHand: number;
  quantityAvailable: number;
  retailPrice: string;
  actions: string[];
}

export const partsData: VehiclePart[] = [
  {
    id: 1,
    itemCode: "VP-1001",
    brand: "Volvo",
    type: "New",
    description: "Front brake pad set",
    quantityOnHand: 120,
    quantityAvailable: 100,
    retailPrice: "$60.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 2,
    itemCode: "TY-2001",
    brand: "Toyota",
    type: "Used",
    description: "Headlight, H7 12V 55W",
    quantityOnHand: 80,
    quantityAvailable: 65,
    retailPrice: "$85.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 3,
    itemCode: "VP-1002",
    brand: "Volvo",
    type: "New",
    description: "Left side mirror",
    quantityOnHand: 150,
    quantityAvailable: 130,
    retailPrice: "$45.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 4,
    itemCode: "TY-2002",
    brand: "Toyota",
    type: "FOC",
    description: "Radiator",
    quantityOnHand: 60,
    quantityAvailable: 55,
    retailPrice: "$130.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 5,
    itemCode: "VP-1003",
    brand: "Volvo",
    type: "Used",
    description: "Air filter",
    quantityOnHand: 200,
    quantityAvailable: 180,
    retailPrice: "$25.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 6,
    itemCode: "TY-2003",
    brand: "Toyota",
    type: "New",
    description: "Fuel pump",
    quantityOnHand: 90,
    quantityAvailable: 70,
    retailPrice: "$98.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 7,
    itemCode: "VP-1004",
    brand: "Volvo",
    type: "New",
    description: "Clutch kit",
    quantityOnHand: 50,
    quantityAvailable: 45,
    retailPrice: "$210.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 8,
    itemCode: "TY-2004",
    brand: "Toyota",
    type: "Used",
    description: "Shock absorber",
    quantityOnHand: 75,
    quantityAvailable: 70,
    retailPrice: "$110.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 9,
    itemCode: "VP-1005",
    brand: "Volvo",
    type: "New",
    description: "Oil filter",
    quantityOnHand: 300,
    quantityAvailable: 290,
    retailPrice: "$18.00",
    actions: ["edit", "view", "delete"],
  },
  {
    id: 10,
    itemCode: "TY-2005",
    brand: "Toyota",
    type: "New",
    description: "Timing belt",
    quantityOnHand: 65,
    quantityAvailable: 60,
    retailPrice: "$75.00",
    actions: ["edit", "view", "delete"],
  },
];
