import { Plus } from "lucide-react";
import type { Technology } from "@/data/technology";

export function TechCard({ item }: { item: Technology }) {
  return (
    <article className="tech-card" data-tech-card>
      <span>{item.number}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button type="button" aria-label={`Open ${item.title}`}>
        <Plus size={18} strokeWidth={1.6} />
      </button>
    </article>
  );
}
