// import { Feature } from "@/app/types/features";
// import { Testimonial } from "@/app/types/testimonials";

// // Mock Data
// const MOCK_FEATURES: Feature[] = [
//   {
//     title: "Outstanding View of all Customers & Supplier in single interface",
//     description:
//       "The software provides a unified interface to view all outstanding balances for customers & suppliers, making it easy to manage receivables and payables efficiently.",
//     category: "special",
//     icon: "Users",
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
//     order: 3,
//   },
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
//   {
//     title: "Very easy purchase, sale & return facility",
//     description: "Simplified purchase, sale, and return handling.",
//     category: "benefit",
//     icon: "RefreshCw",
//   },
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
//     image_url: "https://randomuser.me/api/portraits/women/44.jpg",
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

// interface Video {
//   id: string;
//   title: string;
//   description: string;
// }

// const MOCK_VIDEOS: Video[] = [
//   {
//     id: "b-vLaye6f_I",
//     title: "Shopcare Billing Demo",
//     description: "Complete walkthrough of Shopcare billing software.",
//   },
//   {
//     id: "b-vLaye6f_I",
//     title: "Shopcare POS Demo",
//     description: "See how Shopcare POS works seamlessly.",
//   },
//   {
//     id: "b-vLaye6f_I",
//     title: "Advanced Features",
//     description: "Advanced features of Shopcare for businesses.",
//   },
//   {
//     id: "b-vLaye6f_I",
//     title: "Shopcare Billing Demo",
//     description: "Complete walkthrough of Shopcare billing software.",
//   },
//   {
//     id: "b-vLaye6f_I",
//     title: "Shopcare POS Demo",
//     description: "See how Shopcare POS works seamlessly.",
//   },
//   {
//     id: "b-vLaye6f_I",
//     title: "Advanced Features",
//     description: "Advanced features of Shopcare for businesses.",
//   },
// ];

// // Generic Mock Fetch Function
// export const fetchMockData = <T extends "features" | "testimonials" | "videos">(
//   endpoint: T
// ): Promise<
//   T extends "features"
//     ? Feature[]
//     : T extends "testimonials"
//     ? Testimonial[]
//     : Video[]
// > => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (endpoint === "features") resolve(MOCK_FEATURES as any);
//       else if (endpoint === "testimonials") resolve(MOCK_TESTIMONIALS as any);
//       else resolve(MOCK_VIDEOS as any);
//     }, 500);
//   });
// };

// export { MOCK_FEATURES, MOCK_TESTIMONIALS, MOCK_VIDEOS };

// IMPORT TYPES
import { Feature } from "@/app/types/features";
import { Testimonial } from "@/app/types/testimonials";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { contactdata } from "@/app/types/contactdata";
import { FAQItem } from "@/app/types/faq"; // Added FAQItem import

// ----------------------------
// MOCK FAQ DATA (NEW - moved up for clarity)
// ----------------------------
const MOCK_FAQS: FAQItem[] = [
  {
    question: "What is Shopcare Billing Software?",
    answer:
      "Shopcare is a comprehensive POS (Point of Sale) billing software designed for retail businesses. It offers GST-compliant billing, inventory management, barcode support, and detailed business reports - all in one easy-to-use platform.",
  },
  {
    question: "Is Shopcare GST compliant?",
    answer:
      "Yes, Shopcare is 100% GST compliant. It automatically calculates GST for all transactions, generates GST-ready invoices, and provides reports that help you file your GST returns easily.",
  },
  {
    question: "Can I use Shopcare on multiple devices?",
    answer:
      "Absolutely! Shopcare supports multi-device usage. You can access your business data from desktop computers, laptops, and even mobile devices, keeping your business connected at all times.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, we provide 24/7 customer support. Our dedicated team is always ready to assist you with any queries, technical issues, or training needs. We also offer video tutorials and documentation.",
  },
  {
    question: "How secure is my business data?",
    answer:
      "Your data security is our top priority. Shopcare uses advanced encryption, regular backups, and secure cloud storage to ensure your business data is always protected and accessible.",
  },
  {
    question: "Can I try Shopcare before purchasing?",
    answer:
      "Yes! We offer a free demo so you can explore all features before making a decision. Contact our sales team to schedule a personalized demo for your business.",
  },
];

// ----------------------------
// CONTACT US DATA (EXISTING)
// ----------------------------
export const MOCK_CONTACT: contactdata[] = [
  {
    Id: 1,
    Title: "Phone",
    Icon: Phone,
    Details1: "+91 7798798679",
    Details2: "Mon–Fri 9AM–6PM",
  },
  {
    Id: 2,
    Title: "Email",
    Icon: Mail,
    Details1: "soulsoftinfotech@gmail.com",
    Details2: "We respond within 2 hours",
  },
  {
    Id: 3,
    Title: "Support Hours",
    Icon: Clock,
    Details1: "24/7 Online Support",
    Details2: "Mon–Fri 9AM–6PM",
  },
  {
    Id: 4,
    Title: "Office",
    Icon: MapPin,
    Details1: JSON.stringify([
      "S 10-B, 2nd Floor, Top-Ten Imperial, Sangamner, 422605, A.Nagar",
      "1003, A4, Aishwaryam Hamara, Dehu Alandi Road, Moshi Pune, 411062",
      "Satpur, Behind Jogging Track, Near D-Mart & Reliance Petrol Pump, Nashik, 422007",
    ]),
    Details2: "",
  },
];

// ... (MOCK_FEATURES, MOCK_TESTIMONIALS, MOCK_VIDEOS remain the same) ...
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

// ----------------------------
// GENERIC FETCH FUNCTION (CORRECTED)
// ----------------------------
export const fetchMockData = <
  T extends "features" | "testimonials" | "videos" | "contact" | "faqs" // Added "faqs" here
>(
  endpoint: T
): Promise<
  T extends "features"
    ? Feature[]
    : T extends "testimonials"
    ? Testimonial[]
    : T extends "contact"
    ? typeof MOCK_CONTACT
    : T extends "faqs" // Added conditional check for "faqs"
    ? FAQItem[] // Return type for "faqs"
    : Video[] // Default return type
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint === "features") resolve(MOCK_FEATURES as any);
      else if (endpoint === "testimonials") resolve(MOCK_TESTIMONIALS as any);
      else if (endpoint === "contact") resolve(MOCK_CONTACT as any);
      else if (endpoint === "faqs")
        resolve(MOCK_FAQS as any); // Added data resolution for "faqs"
      else resolve(MOCK_VIDEOS as any);
    }, 500);
  });
};

// EXPORT ALL MOCKS (EXISTING EXPORTS)
export {
  MOCK_FEATURES,
  MOCK_TESTIMONIALS,
  MOCK_VIDEOS,
  MOCK_CONTACT,
  MOCK_FAQS,
};
