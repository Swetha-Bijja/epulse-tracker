import { getTaskByDateRange } from "@/data/board";
import { getDaysArray, getFirstAndLastDayOfTheWeek } from "@/lib/date-helper";
import { IDragAndDropKitContainer } from "@/types";
import { StateCreator } from "zustand";

type State = {
  todaysDate: Date;
  selectedDateRange: {
    selectedFromDate: Date;
    selectedToDate: Date;
  };
  selectedWeekDates: Date[];
  containers: IDragAndDropKitContainer[];
  isWeekendVisible: boolean;
};

type Action = {
  setSelectedDateRange: (start: Date
    , end: Date) => void;
  setContainers: (data: IDragAndDropKitContainer[]) => void;
  setIsWeekendVisible: (value: boolean) => void;
};

export interface IBoardSlice extends State, Action {}

const todaysDate = new Date();
const { firstDayOfTheWeek, lastDayOfTheWeek } =
  getFirstAndLastDayOfTheWeek(todaysDate);
const results = await getTaskByDateRange(firstDayOfTheWeek, lastDayOfTheWeek);

export const BoardSlice: StateCreator<IBoardSlice> = (set, get) => ({
  todaysDate: todaysDate,
  selectedDateRange: {
    selectedFromDate: firstDayOfTheWeek,
    selectedToDate: lastDayOfTheWeek,
  },
  selectedWeekDates: getDaysArray(firstDayOfTheWeek, lastDayOfTheWeek),
  containers: results,
  isWeekendVisible: false,
  setSelectedDateRange: async (start, end) => {
    const result = await getTaskByDateRange(start, end);
    set(() => ({
      selectedDateRange: {
        selectedFromDate: start,
        selectedToDate: end,
      },
      selectedWeekDates: getDaysArray(start, end),
      containers: result,
    }));
  },
  setContainers: (data) => {
    set(() => ({
      containers: data,
    }));
  },
  setIsWeekendVisible: (value) => {
    set(() => ({
      isWeekendVisible: value,
    }));
  },
});
