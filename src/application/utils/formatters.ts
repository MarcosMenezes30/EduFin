import type { ISODateString } from "../../domain/entities/Transaction";

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

export function formatShortDate(value: ISODateString): string {
  return dateFormatter.format(new Date(`${value}T00:00:00.000Z`));
}
