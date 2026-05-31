import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "business-website-starter-template",
    name: "Business Website Starter Template",
    category: "Website Template",
    price: 49,
    image: "/products/website-template.jpg",
    shortDescription: "A clean starter website template for small businesses.",
    description: "A professional business website starter template for companies that need a modern online presence quickly. Includes layout guidance, page structure, and ready sections.",
    features: ["Homepage layout", "Services section", "Contact section", "Mobile friendly structure"]
  },
  {
    id: 2,
    slug: "small-business-automation-kit",
    name: "Small Business Automation Kit",
    category: "Automation",
    price: 79,
    image: "/products/automation-kit.jpg",
    shortDescription: "Templates and workflows to automate business tasks.",
    description: "A practical automation kit with workflow ideas, templates, and setup guidance to help small businesses save time on repeated tasks.",
    features: ["Workflow templates", "Checklist files", "Setup guidance", "Business process ideas"]
  },
  {
    id: 3,
    slug: "cybersecurity-checklist-pack",
    name: "Cybersecurity Checklist Pack",
    category: "Cybersecurity",
    price: 29,
    image: "/products/cybersecurity-checklist.jpg",
    shortDescription: "Simple cybersecurity checklist pack for small businesses.",
    description: "A beginner-friendly cybersecurity checklist pack that helps businesses improve password safety, device security, data protection, and basic online safety.",
    features: ["Password checklist", "Device safety guide", "Data backup checklist", "Staff awareness tips"]
  },
  {
    id: 4,
    slug: "cloud-setup-guide",
    name: "Cloud Setup Guide",
    category: "Cloud",
    price: 39,
    image: "/products/cloud-setup-guide.jpg",
    shortDescription: "Step-by-step guide for basic business cloud setup.",
    description: "A digital guide for setting up cloud storage, file sharing, team access, and simple cloud tools for small business operations.",
    features: ["Cloud storage basics", "File sharing setup", "Team access tips", "Backup planning"]
  },
  {
    id: 5,
    slug: "digital-branding-starter-kit",
    name: "Digital Branding Starter Kit",
    category: "Branding",
    price: 59,
    image: "/products/branding-kit.jpg",
    shortDescription: "Branding templates and content planning tools.",
    description: "A starter branding kit with brand checklist, social content ideas, simple design guidance, and digital templates for online businesses.",
    features: ["Brand checklist", "Content ideas", "Design guidance", "Business profile templates"]
  },
  {
    id: 6,
    slug: "it-support-consultation-package",
    name: "IT Support Consultation Package",
    category: "IT Support",
    price: 99,
    image: "/products/it-support-package.jpg",
    shortDescription: "Online IT consultation package for small businesses.",
    description: "A remote IT support consultation package for small businesses needing help with websites, email setup, cloud tools, or basic IT planning.",
    features: ["Remote consultation", "Email setup advice", "Website guidance", "IT planning support"]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
