import { format } from "date-fns";

export const DateFormatter = (date: string) => {
  const formattedDate = format(new Date(date), "dd MMMM yyyy");

  return formattedDate;
};
