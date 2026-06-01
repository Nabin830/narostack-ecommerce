export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  badge: string;
  image: string;
  shortDescription: string;
  description: string;
  delivery: string;
  includes: string[];
  bestFor: string[];
};

export const products: Product[] = [
  {
    slug: "business-website-starter-template",
    name: "Business Website Starter Template",
    price: 49,
    category: "Website Template",
    badge: "Digital Download",
    image: "/images/website-template.jpg",
    shortDescription:
      "A downloadable website starter template for small business landing pages and online product pages.",
    description:
      "The Business Website Starter Template is a downloadable website resource created for small businesses that need a clean and professional online presence. It includes structured page sections, layout ideas, and content guidance that can help a business prepare a simple website faster.",
    delivery:
      "Delivered electronically by email, download link, or online access after payment confirmation.",
    includes: [
      "Homepage layout template",
      "Product section structure",
      "About page content guide",
      "Contact page content guide",
      "Website launch checklist",
    ],
    bestFor: [
      "Small businesses preparing a simple website",
      "Business owners who need a professional starting point",
      "Users who want downloadable website structure and guidance",
    ],
  },
  {
    slug: "small-business-automation-template-kit",
    name: "Small Business Automation Template Kit",
    price: 79,
    category: "Automation Templates",
    badge: "Digital Download",
    image: "/images/automation-kit.jpg",
    shortDescription:
      "A downloadable template kit for planning repeatable business workflows and internal processes.",
    description:
      "The Small Business Automation Template Kit is a downloadable resource pack designed to help small businesses organize repeatable tasks, workflow steps, and internal process notes. It includes planning sheets, checklist templates, example email flows, and task tracking resources.",
    delivery:
      "Delivered electronically by email, download link, or online access after payment confirmation.",
    includes: [
      "Workflow planning template",
      "Task tracking sheet",
      "Process checklist",
      "Email flow examples",
      "Business process documentation guide",
    ],
    bestFor: [
      "Small businesses organizing routine tasks",
      "Business owners creating repeatable workflows",
      "Users who want downloadable planning resources",
    ],
  },
  {
    slug: "cloud-setup-guide",
    name: "Cloud Setup Guide",
    price: 39,
    category: "Cloud Guide",
    badge: "Digital Guide",
    image: "/images/cloud-setup-guide.jpg",
    shortDescription:
      "A downloadable guide for organizing files, accounts, access notes, and basic cloud workflows.",
    description:
      "The Cloud Setup Guide is a downloadable guide that helps small businesses plan file organization, account notes, access planning, backup habits, and simple cloud workflow preparation.",
    delivery:
      "Delivered electronically by email, download link, or online access after payment confirmation.",
    includes: [
      "Cloud account planning guide",
      "File and folder organization checklist",
      "Access planning sheet",
      "Backup preparation checklist",
      "Small business cloud readiness guide",
    ],
    bestFor: [
      "Small businesses planning cloud organization",
      "Teams preparing file and access structure",
      "Users who want a downloadable cloud planning resource",
    ],
  },
  {
    slug: "digital-branding-starter-kit",
    name: "Digital Branding Starter Kit",
    price: 59,
    category: "Branding Kit",
    badge: "Digital Kit",
    image: "/images/branding-kit.jpg",
    shortDescription:
      "A downloadable branding starter kit with simple brand planning templates for small businesses.",
    description:
      "The Digital Branding Starter Kit is a downloadable resource pack for small businesses preparing basic brand materials. It includes brand planning worksheets, color and typography planning guidance, social profile checklist, and content structure templates.",
    delivery:
      "Delivered electronically by email, download link, or online access after payment confirmation.",
    includes: [
      "Brand identity planning worksheet",
      "Color and font planning guide",
      "Social profile checklist",
      "Business description template",
      "Basic content planning worksheet",
    ],
    bestFor: [
      "Small businesses preparing brand materials",
      "Owners who need simple brand organization templates",
      "Users who want downloadable branding planning resources",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const featuredProducts = products.slice(0, 3);