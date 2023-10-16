import { getDaysArray, getFormattedDate } from "@/lib/date-helper";
import { IDragAndDropKitContainer } from "@/types";
import { nanoid } from "nanoid";

const getTaskByDateRange = (start: Date, end: Date): IDragAndDropKitContainer[] => {
  return new Promise<IDragAndDropKitContainer[]>((resolve) => {
    resolve(
      getDaysArray(start, end).map((value) => {
        const itemCount = Math.floor(Math.random() * 8);
        return {
          id: `container-${getFormattedDate(value)}`,
          title: `${getFormattedDate(value)}`,
          totalHours: itemCount,
          items: Array.from({ length: itemCount }, () => ({
            id: `items-${nanoid(10)}`,
            title: `Entry ${nanoid(10)}`,
            hours: 1,
          })),
        };
      })
    );
  });
};

export { getTaskByDateRange };
