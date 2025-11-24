// import { Feature } from "@/app/types/features";
// import { Testimonial } from "@/app/types/testimonials";

// // Mock Data
// const MOCK_FEATURES: Feature[] = [
//   // --- SPECIAL FEATURES (for your SpecialFeatures.tsx page)
//   {
//     title: "Outstanding View of all Customers & Supplier in single interface",
//     description:
//       "The software provides a unified interface to view all outstanding balances for customers & suppliers, making it easy to manage receivables and payables efficiently.",
//     category: "special",
//     icon: "Users", // Closest match for the icon in the image (multiple people/user icon)
//     order: 1,
//   },
//   {
//     title: "Smart Customer Engagement",
//     description: "Automated customer engagement with personalized SMS & Email.",
//     category: "special",
//     icon: "Mail",
//     order: 2,
//   },
//   {
//     title: "Stock Statement with Valuation & Supplier-wise Stock Statement",
//     description:
//       "Offers detailed stock statements with valuation & supplier-wise breakdowns, allowing businesses to monitor inventory levels & assess stock value effectively.",
//     category: "special",
//     icon: "Users",
//     order: 1,
//   },

//   // {
//   //   title: "Outstanding View of all Customers & Supplier in single interface",
//   //   description:
//   //     "The software provides a unified interface to view all outstanding balances for customers & suppliers, making it easy to manage receivables and payables efficiently.",
//   //   category: "special",
//   //   icon: "Users", // Closest match for the icon in the image (multiple people/user icon)
//   //   order: 1,
//   // },
//   // {
//   //   title: "Stock Statement with Valuation & Supplier-wise Stock Statement",
//   //   description:
//   //     "Offers detailed stock statements with valuation & supplier-wise breakdowns, allowing businesses to monitor inventory levels & assess stock value effectively.",
//   //   category: "special",
//   //   icon: "Package", // Closest match for the icon in the image (stack of items/box icon)
//   //   order: 2,
//   // },
//   // {
//   //   title: "SMS Module (SMS for Bill, Ledger Recovery, Festival)",
//   //   description:
//   //     "The SMS module automates notifications for bills, ledger recovery, and festivals, enhancing communication and customer engagement.",
//   //   category: "special",
//   //   icon: "MessageSquare", // Closest match for the icon in the image (speech bubble with 'P' or message icon)
//   //   order: 3,
//   // },
//   // {
//   //   title: "Firm Separation of Sales Invoice for GST Bill & Non-GST Bill",
//   //   description:
//   //     "The software ensures clear differentiation between GST and Non-GST sales invoices, simplifying compliance and financial tracking.",
//   //   category: "special",
//   //   icon: "ShieldCheck", // Closest match for the icon in the image (shield icon)
//   //   order: 4,
//   // },
//   // {
//   //   title: "Profit and Loss by Bill, by Date & Itemwise for Every bill",
//   //   description:
//   //     "The software offers detailed profit and loss analysis by bill, date, and item, providing precise insights into financial performance for every transaction.",
//   //   category: "special",
//   //   icon: "TrendingUp", // Closest match for the icon in the image (upward trend line/chart icon)
//   //   order: 5,
//   // },
//   // {
//   //   title: "Auto Back Up to Customer's Email Account",
//   //   description:
//   //     "The software automatically backs up critical data to the customer's email account, ensuring secure and accessible data storage.",
//   //   category: "special",
//   //   icon: "Mail", // Closest match for the icon in the image (envelope/email icon)
//   //   order: 6,
//   // },

//   // --- MAIN FEATURES
//   {
//     title: "POS (Point of sales system with Inventory & Barcode)",
//     description:
//       "Complete POS with Inventory & Barcode management for retail operations.",
//     category: "main",
//     icon: "ShoppingCart",
//     order: 1,
//   },
//   {
//     title: "Quotation, Purchase, Sales, Delivery Challan",
//     description: "Easy-to-use interfaces for all business operations.",
//     category: "main",
//     icon: "FileText",
//     order: 2,
//   },

//   // --- BENEFITS
//   {
//     title: "Very easy purchase, sale & return facility",
//     description: "Simplified purchase, sale, and return handling.",
//     category: "benefit",
//     icon: "RefreshCw",
//   },

//   // --- WORKFLOW
//   // Workflow Items
//   {
//     title: "Quotation - GST, Non-GST Formats",
//     description:
//       "Allows businesses to generate quotations with formats for GST and Non-GST transactions.",
//     icon: "FileText",
//     category: "workflow",
//     order: 1,
//   },
//   {
//     title:
//       "Purchase Order (Only Inward Stock) Delivery challan & Challan Return",
//     description:
//       "Streamlines inventory management by handling purchase orders exclusively for inward stock.",
//     icon: "Package",
//     category: "workflow",
//     order: 2,
//   },
//   {
//     title: "Sales from Quotation & Delivery Challan",
//     description:
//       "Seamless conversion of quotations and delivery challans into sales invoices, simplifying the sales process and ensuring accurate billing.",
//     icon: "ShoppingBag",
//     category: "workflow",
//     order: 3,
//   },
// ];

// const MOCK_TESTIMONIALS: Testimonial[] = [
//   {
//     customer_name: "Rajesh Kumar",
//     business_name: "Shivneri Hardware",
//     review: "Shopcare transformed our inventory & billing experience!",
//     rating: 5,
//     image_url: "/images/rajesh-kumar.jpg",
//   },
//   {
//     customer_name: "Alice Johnson",
//     business_name: "Tech Solutions",
//     review: "Shopcare transformed our business operations!",
//     rating: 5,
//     image_url: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     customer_name: "Bob Smith",
//     business_name: "Retail Co.",
//     review: "Easy to use and highly efficient billing software.",
//     rating: 4,
//     image_url: "https://randomuser.me/api/portraits/men/46.jpg",
//   },
//   {
//     customer_name: "Clara Lee",
//     review: "Fantastic customer support and smooth integration.",
//     rating: 5,
//   },
//   {
//     customer_name: "David Kim",
//     business_name: "Cafe Delight",
//     review: "We saved so much time using Shopcare every day!",
//     rating: 5,
//     image_url: "https://randomuser.me/api/portraits/men/55.jpg",
//   },
// ];

// /* Generic Mock Fetch Function */
// export const fetchMockData = <T extends "features" | "testimonials">(
//   endpoint: T
// ): Promise<T extends "features" ? Feature[] : Testimonial[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (endpoint === "features") resolve(MOCK_FEATURES as any);
//       else resolve(MOCK_TESTIMONIALS as any);
//     }, 500);
//   });
// };

// export { MOCK_FEATURES, MOCK_TESTIMONIALS };
import { Feature } from "@/app/types/features";
import { Testimonial } from "@/app/types/testimonials";

// Mock Data
const MOCK_FEATURES: Feature[] = [
  {
    title: "Outstanding View of all Customers & Supplier in single interface",
    description:
      "The software provides a unified interface to view all outstanding balances for customers & suppliers, making it easy to manage receivables and payables efficiently.",
    category: "special",
    icon: "Users",
    order: 1,
  },
  {
    title: "Smart Customer Engagement",
    description: "Automated customer engagement with personalized SMS & Email.",
    category: "special",
    icon: "Mail",
    order: 2,
  },
  {
    title: "Stock Statement with Valuation & Supplier-wise Stock Statement",
    description:
      "Offers detailed stock statements with valuation & supplier-wise breakdowns, allowing businesses to monitor inventory levels & assess stock value effectively.",
    category: "special",
    icon: "Users",
    order: 3,
  },
  {
    title: "POS (Point of sales system with Inventory & Barcode)",
    description:
      "Complete POS with Inventory & Barcode management for retail operations.",
    category: "main",
    icon: "ShoppingCart",
    order: 1,
  },
  {
    title: "Quotation, Purchase, Sales, Delivery Challan",
    description: "Easy-to-use interfaces for all business operations.",
    category: "main",
    icon: "FileText",
    order: 2,
  },
  {
    title: "Very easy purchase, sale & return facility",
    description: "Simplified purchase, sale, and return handling.",
    category: "benefit",
    icon: "RefreshCw",
  },
  {
    title: "Quotation - GST, Non-GST Formats",
    description:
      "Allows businesses to generate quotations with formats for GST and Non-GST transactions.",
    icon: "FileText",
    category: "workflow",
    order: 1,
  },
  {
    title:
      "Purchase Order (Only Inward Stock) Delivery challan & Challan Return",
    description:
      "Streamlines inventory management by handling purchase orders exclusively for inward stock.",
    icon: "Package",
    category: "workflow",
    order: 2,
  },
  {
    title: "Sales from Quotation & Delivery Challan",
    description:
      "Seamless conversion of quotations and delivery challans into sales invoices, simplifying the sales process and ensuring accurate billing.",
    icon: "ShoppingBag",
    category: "workflow",
    order: 3,
  },
];

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    customer_name: "Rajesh Kumar",
    business_name: "Shivneri Hardware",
    review: "Shopcare transformed our inventory & billing experience!",
    rating: 5,
    image_url: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    customer_name: "Alice Johnson",
    business_name: "Tech Solutions",
    review: "Shopcare transformed our business operations!",
    rating: 5,
    image_url: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    customer_name: "Bob Smith",
    business_name: "Retail Co.",
    review: "Easy to use and highly efficient billing software.",
    rating: 4,
    image_url: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    customer_name: "Clara Lee",
    review: "Fantastic customer support and smooth integration.",
    rating: 5,
  },
  {
    customer_name: "David Kim",
    business_name: "Cafe Delight",
    review: "We saved so much time using Shopcare every day!",
    rating: 5,
    image_url: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

interface Video {
  id: string;
  title: string;
  description: string;
}

const MOCK_VIDEOS: Video[] = [
  {
    id: "b-vLaye6f_I",
    title: "Shopcare Billing Demo",
    description: "Complete walkthrough of Shopcare billing software.",
  },
  {
    id: "b-vLaye6f_I",
    title: "Shopcare POS Demo",
    description: "See how Shopcare POS works seamlessly.",
  },
  {
    id: "b-vLaye6f_I",
    title: "Advanced Features",
    description: "Advanced features of Shopcare for businesses.",
  },
  {
    id: "b-vLaye6f_I",
    title: "Shopcare Billing Demo",
    description: "Complete walkthrough of Shopcare billing software.",
  },
  {
    id: "b-vLaye6f_I",
    title: "Shopcare POS Demo",
    description: "See how Shopcare POS works seamlessly.",
  },
  {
    id: "b-vLaye6f_I",
    title: "Advanced Features",
    description: "Advanced features of Shopcare for businesses.",
  },
];

// Generic Mock Fetch Function
export const fetchMockData = <T extends "features" | "testimonials" | "videos">(
  endpoint: T
): Promise<
  T extends "features"
    ? Feature[]
    : T extends "testimonials"
    ? Testimonial[]
    : Video[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint === "features") resolve(MOCK_FEATURES as any);
      else if (endpoint === "testimonials") resolve(MOCK_TESTIMONIALS as any);
      else resolve(MOCK_VIDEOS as any);
    }, 500);
  });
};

export { MOCK_FEATURES, MOCK_TESTIMONIALS, MOCK_VIDEOS };
