import DateRangeSelector from "@/components/date-range-selector";
import ViewOptions from "./view-options";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <div>ePulse Tracker</div>
      <div>
        <DateRangeSelector />
      </div>
      <div>
        <ViewOptions />
      </div>
    </div>
  );
};

export default Navbar;
