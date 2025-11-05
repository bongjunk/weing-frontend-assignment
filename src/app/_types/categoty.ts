export type CategoryType = "default" | "eco" | "special" | "zet";

export type CategoryItem = {
  title: string;
  subtitle?: string;
  type?: CategoryType;
  children?: string[];
};
