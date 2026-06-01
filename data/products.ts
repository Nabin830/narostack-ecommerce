export type Product = {
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  badge: string;
  delivery: string;
  category: string;
  includes: string[];
  bestFor: string[];
};

export const products: Product[] = [
  {
    slug: "business-website-starter-template",
    name: "Business Website Starter Template",
    price: 49,
    shortDescription:
      "A clean and professional starter website template for small businesses.",
    description:
      "The Business Website Starter Template helps small businesses launch a professional online presence faster. It is designed for service providers, consultants, agencies, and local businesses that need a modern website structure without starting from zero.",
    image: "/images/website-template.jpg",
    badge: "Digital Product",
    delivery: "Delivered by email/download after payment confirmation",
    category: "Website Template",
    includes: [
      "Homepage layout",
      "Service section structure",
      "Contact page structure",
      "Responsive design guidance",
      "Basic customization notes",
    ],
    bestFor: [
      "Small business websites",
      "Service-based businesses",
      "Startup landing pages",
    ],
  },
  {
    slug: "small-business-automation-kit",
    name: "Small Business Automation Kit",
    price: 79,
    shortDescription:
      "Automation resources to help small businesses organize repeat tasks.",
    description:
      "The Small Business Automation Kit provides practical setup resources for automating simple business workflows such as customer enquiries, follow-up emails, task tracking, and internal process organization.",
    image: "/images/automation-kit.jpg",
    badge: "Digital Product",
    delivery: "Delivered by email/download after payment confirmation",
    category: "Business Automation",
    includes: [
      "Workflow planning guide",
      "Automation checklist",
      "Customer follow-up process template",
      "Basic tool setup suggestions",
      "Small business process examples",
    ],
    bestFor: [
      "Small business owners",
      "Admin process improvement",
      "Simple workflow automation",
    ],
  },
  {
    slug: "cybersecurity-checklist-pack",
    name: "Cybersecurity Checklist Pack",
    price: 29,
    shortDescription:
      "Simple cybersecurity checklists for small business protection.",
    description:
      "The Cybersecurity Checklist Pack gives small businesses a practical starting point for improving digital safety. It includes easy-to-follow checklists for passwords, devices, data backups, access control, and online account security.",
    image: "/images/cybersecurity-checklist.jpg",
    badge: "Digital Product",
    delivery: "Delivered by email/download after payment confirmation",
    category: "Cybersecurity",
    includes: [
      "Password security checklist",
      "Device safety checklist",
      "Data backup checklist",
      "Employee access checklist",
      "Incident preparation checklist",
    ],
    bestFor: [
      "Small business owners",
      "Basic cybersecurity review",
      "Internal IT safety checks",
    ],
  },
  {
    slug: "cloud-setup-guide",
    name: "Cloud Setup Guide",
    price: 39,
    shortDescription:
      "Step-by-step cloud setup guidance for small business operations.",
    description:
      "The Cloud Setup Guide helps small businesses understand how to prepare for cloud tools, organize accounts, manage access, and follow basic setup practices for safer and more reliable online operations.",
    image: "/images/cloud-setup-guide.jpg",
    badge: "Digital Guide",
    delivery: "Delivered by email/download after payment confirmation",
    category: "Cloud Solutions",
    includes: [
      "Cloud readiness checklist",
      "Account setup guidance",
      "Access management notes",
      "File organization tips",
      "Basic cloud security steps",
    ],
    bestFor: [
      "Cloud onboarding",
      "Small team setup",
      "Business file organization",
    ],
  },
  {
    slug: "digital-branding-starter-kit",
    name: "Digital Branding Starter Kit",
    price: 59,
    shortDescription:
      "A starter kit for building a simple and consistent digital brand.",
    description:
      "The Digital Branding Starter Kit helps small businesses present a cleaner and more professional image online. It includes branding structure, visual consistency guidance, and digital asset planning resources.",
    image: "/images/branding-kit.jpg",
    badge: "Digital Product",
    delivery: "Delivered by email/download after payment confirmation",
    category: "Digital Branding",
    includes: [
      "Brand style checklist",
      "Color and font planning guide",
      "Social media profile checklist",
      "Basic brand asset structure",
      "Digital presence review notes",
    ],
    bestFor: [
      "New small businesses",
      "Brand refresh planning",
      "Online business presence",
    ],
  },
  {
    slug: "it-support-consultation-package",
    name: "IT Support Consultation Package",
    price: 99,
    shortDescription:
      "A professional IT support consultation package for small businesses.",
    description:
      "The IT Support Consultation Package is designed for small businesses that need help understanding their technology setup, digital tools, cloud systems, website needs, or basic cybersecurity requirements.",
    image: "/images/it-support-package.jpg",
    badge: "Digital Service",
    delivery: "Delivered by email or online access after payment confirmation",
    category: "IT Support",
    includes: [
      "Initial IT needs review",
      "Technology setup guidance",
      "Basic troubleshooting support",
      "Cloud and website advice",
      "Follow-up recommendation summary",
    ],
    bestFor: [
      "Small business IT support",
      "Technology planning",
      "Digital operations improvement",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const featuredProducts = products.slice(0, 3);