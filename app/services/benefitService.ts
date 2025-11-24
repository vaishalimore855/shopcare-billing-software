export type BenefitType = {
  id: number;
  title: string;
  // description: string;
  icon: string;
};

export const fetchBenefits = async (): Promise<BenefitType[]> => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock API Data (replace with real API later)
  return [
    {
      id: 1,
      title: "Very easy purchase, sale and sales return facility.",
      // description: "Your data syncs automatically without manual refresh.",
      icon: "RefreshCw",
    },
    {
      id: 2,
      title: "Cash / credit and wholesale price for sales.",
      // description: "Reduce time, errors, and overall operational expenses.",
      icon: "DollarSign",
    },
    {
      id: 3,
      title: "Very easy and convenient billing form.",
      // description: "Generate GST reports, invoices, and summaries instantly.",
      icon: "FileCheck",
    },
    {
      id: 4,
      title: "A printout of the bill can be prepared for each customer.",
      // description: "Instant billing print support for all printers.",
      icon: "Printer",
    },
    {
      id: 5,
      title:
        "All the previous bills of the customer can be viewed in the current bill itself.",
      // description: "Track customer history, purchase logs, and data analytics.",
      icon: "History",
    },
  ];
};
