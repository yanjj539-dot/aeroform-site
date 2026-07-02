import { withBasePath } from "@/lib/paths";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type MaterialStudy = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: withBasePath("/assets/gallery/gallery-runner-01.png"),
    alt: "Runner sprinting through concrete light",
    caption: "Impact / Drive",
  },
  {
    src: withBasePath("/assets/gallery/gallery-night.png"),
    alt: "Runner in black technical gear at night",
    caption: "Low light visibility",
  },
  {
    src: withBasePath("/assets/hero/hero-runner.png"),
    alt: "AEROFORM runner moving across an urban concrete wall",
    caption: "Forward motion",
  },
  {
    src: withBasePath("/assets/gallery/gallery-jacket.png"),
    alt: "Close-up of black running shell fabric and lime detail",
    caption: "Shell detail",
  },
  {
    src: withBasePath("/assets/gallery/gallery-shoe.png"),
    alt: "AEROFORM running shoe landing on wet concrete",
    caption: "Ground contact",
  },
];

export const materialStudies: MaterialStudy[] = [
  {
    title: "Performance Knit",
    description: "Lightweight structure, soft hand, and built for constant airflow.",
    image: withBasePath("/assets/textures/texture-mesh.png"),
    alt: "Black perforated performance mesh texture",
  },
  {
    title: "Woven Shell",
    description: "Wind-resistant protection with minimal weight.",
    image: withBasePath("/assets/textures/texture-shell.png"),
    alt: "Black woven technical shell fabric with water beads",
  },
  {
    title: "Storm Detail",
    description: "Water shedding surfaces for repeated city miles.",
    image: withBasePath("/assets/gallery/gallery-jacket.png"),
    alt: "Technical jacket detail with black fabric and lime accent",
  },
];
