import { withBasePath } from "@/lib/paths";

export type Product = {
  number: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    number: "01",
    category: "APPAREL",
    name: "AEROFORM Jacket",
    description: "Ultralight. Packable. Weather Ready.",
    tags: ["Wind Shield", "Breathable Mesh", "Reflective Track"],
    image: withBasePath("/assets/products/jacket-main.png"),
    alt: "AEROFORM black technical running jacket with lime detail",
  },
  {
    number: "02",
    category: "FOOTWEAR",
    name: "AEROFORM Runner",
    description: "Propel Forward. Effortless.",
    tags: ["Lightweight Foam", "Grip Pattern", "Forward Geometry"],
    image: withBasePath("/assets/products/runner-main.png"),
    alt: "AEROFORM black running shoe on concrete",
  },
  {
    number: "03",
    category: "BASE LAYER",
    name: "AEROFORM Tee",
    description: "Cooler Miles. Cleaner Motion.",
    tags: ["Air Mesh Zones", "Quick Dry Fabric", "Motion Cut"],
    image: withBasePath("/assets/products/tee-main.png"),
    alt: "AEROFORM black base layer running tee",
  },
  {
    number: "04",
    category: "COMPRESSION",
    name: "AEROFORM Tight",
    description: "Support Without Resistance.",
    tags: ["Compression Fit", "Reflective Markers", "Ergonomic Panels"],
    image: withBasePath("/assets/products/tight-main.png"),
    alt: "AEROFORM black compression running tight",
  },
];
