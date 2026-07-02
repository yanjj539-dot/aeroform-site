import { withBasePath } from "@/lib/paths";

export type Technology = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const technology: Technology[] = [
  {
    number: "01",
    title: "Ultralight Shell",
    description:
      "Advanced materials reduce weight without sacrificing protection.",
    image: withBasePath("/assets/textures/texture-shell.png"),
    alt: "Black woven technical shell material with water beads",
  },
  {
    number: "02",
    title: "Air Mesh System",
    description: "Adaptive ventilation keeps air moving when pace increases.",
    image: withBasePath("/assets/textures/texture-mesh.png"),
    alt: "Black perforated mesh material detail",
  },
  {
    number: "03",
    title: "Reflective Track",
    description:
      "Low-light visibility placed exactly where movement catches light.",
    image: withBasePath("/assets/gallery/gallery-jacket.png"),
    alt: "Reflective detail on black technical jacket",
  },
  {
    number: "04",
    title: "Motion Cut",
    description: "Pattern engineering that follows the body in motion.",
    image: withBasePath("/assets/gallery/gallery-runner-01.png"),
    alt: "Runner in motion wearing black AEROFORM gear",
  },
];
