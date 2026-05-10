import type { LucideIcon } from "lucide-react";

export type PageId =
  | "overview"
  | "expenses"
  | "goals"
  | "insights"
  | "education"
  | "assistant"
  | "tutorials";

export interface NavigationItem {
  id: PageId;
  label: string;
  group: string;
  icon: LucideIcon;
}
