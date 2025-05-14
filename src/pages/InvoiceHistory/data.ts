export interface PartInvoice {
  purchaseId: number;
  partId: number;
  partName: string;
  purchasingStatusId: string;
  costPrice: number;
  dateReceived: string;
  dateInvoiced: string;
  noOfItemsInLot: number;
}

export const invoiceData: PartInvoice[] = [
  {
    purchaseId: 1001,
    partId: 501,
    partName: "Brake Pads",
    purchasingStatusId: "status1",
    costPrice: 125.5,
    dateReceived: "2025-05-01",
    dateInvoiced: "2025-05-03",
    noOfItemsInLot: 20,
  },
  {
    purchaseId: 1002,
    partId: 501,
    partName: "Brake Pads",
    purchasingStatusId: "status2",
    costPrice: 130.0,
    dateReceived: "2025-05-06",
    dateInvoiced: "2025-05-07",
    noOfItemsInLot: 25,
  },
  {
    purchaseId: 1016,
    partId: 501,
    partName: "Brake Pads",
    purchasingStatusId: "status1",
    costPrice: 128.0,
    dateReceived: "2025-04-28",
    dateInvoiced: "2025-04-30",
    noOfItemsInLot: 22,
  },
  {
    purchaseId: 1017,
    partId: 501,
    partName: "Brake Pads",
    purchasingStatusId: "status3",
    costPrice: 127.25,
    dateReceived: "2025-04-18",
    dateInvoiced: "2025-04-20",
    noOfItemsInLot: 30,
  },
  {
    purchaseId: 1018,
    partId: 501,
    partName: "Brake Pads",
    purchasingStatusId: "status2",
    costPrice: 129.5,
    dateReceived: "2025-04-10",
    dateInvoiced: "2025-04-12",
    noOfItemsInLot: 28,
  },
];
