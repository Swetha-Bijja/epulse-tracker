import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useStore from "@/stores/store";
import { getFormattedDate } from "@/lib/date-helper";

const DateRangeSelector = () => {
  const {
    containers,
    selectedDateRange: { selectedFromDate, selectedToDate },
    setSelectedDateRange,
  } = useStore((state) => ({
    containers: state.containers,
    selectedDateRange: state.selectedDateRange,
    setSelectedDateRange: state.setSelectedDateRange,
  }));

  const totalWeekHours = containers.reduce((total, currentValue) => total + (currentValue?.totalHours ?? 0), 0)

  const handlePrevWeek = () => {
    const start = new Date(
      selectedFromDate.setDate(selectedFromDate.getDate() - 7)
    );
    const end = new Date(selectedToDate.setDate(selectedToDate.getDate() - 7));
    setSelectedDateRange(start, end);
  };

  const handleNextWeek = () => {
    const start = new Date(
      selectedFromDate.setDate(selectedFromDate.getDate() + 7)
    );
    const end = new Date(selectedToDate.setDate(selectedToDate.getDate() + 7));
    setSelectedDateRange(start, end);
  };

  return (
    <div className="flex justify-between space-x-1">
      <Button variant="ghost" size="icon" onClick={handlePrevWeek}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <div className="flex flex-col items-center text-sm">
        <div>
          {getFormattedDate(selectedFromDate)} -{" "}
          {getFormattedDate(selectedToDate)}
        </div>
        <div>{totalWeekHours}h / 40h</div>
      </div>
      <Button variant="ghost" size="icon" onClick={handleNextWeek}>
        <ChevronRight className="h6  w64" />
      </Button>
    </div>
  );
};

export default DateRangeSelector;
