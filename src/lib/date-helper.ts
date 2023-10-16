/**
 * It takes a year and a month as arguments, and returns an array of objects, each object containing
 * the start and end dates of the week, and an array of all the dates in that week
 * @param year - The year of the month you want to get the weeks for.
 * @param month - The month you want to get the weeks for.
 * @returns An array of objects.
 */
function getWeeksInMonth(year: number, month: number) {
  const weeks: number[][] = [];

  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  const numDays = lastDate.getDate();

  let dayOfWeekCounter = firstDate.getDay();

  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      weeks.push([]);
    }
    weeks[weeks.length - 1].push(date);
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }

  /* This is to add the last week of the previous month to the first week of the current month. */
  if (weeks[0].length < 7) {
    const beforeIndex1 = addMonth(year, month - 1, 1);
    const indexRefactor = [...beforeIndex1, ...weeks[0]];
    weeks[0] = indexRefactor;
  }

  /* This is to add the first week of the next month to the last week of the current month. */
  if (weeks[weeks.length - 1].length < 7) {
    const afterIndex1 = addMonth(year, month + 1, 0);
    const indexRefactor = [...weeks[weeks.length - 1], ...afterIndex1];
    weeks[weeks.length - 1] = indexRefactor;
  }

  return weeks
    .filter((w) => !!w.length)
    .map((w) => ({
      start: w[0],
      end: w[w.length - 1],
      dates: w,
    }));
}

/**
 * It takes a year, month, and flag, and returns the first or last week of the month, depending on the
 * flag
 * @param year - the year of the month you want to get
 * @param month - The month you want to get the first or last week of.
 * @param flag - 0 for first week, 1 for last week, 2 for all weeks
 * @returns An array of arrays.
 */

const addMonth = (year: number, month: number, flag: number) => {
  const weeks: number[][] = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate();

  let dayOfWeekCounter = firstDate.getDay();
  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      weeks.push([]);
    }
    weeks[weeks.length - 1].push(date);
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }

  if (flag === 0) {
    return weeks[0];
  }
  if (flag === 1) {
    return weeks[weeks.length - 1];
  }
  return [];
};

function getFormattedDate(date: Date) {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split("T")[0];
}

function getDaysArray(start: Date, end: Date) {
  const datesArray = [];
  for (
    let dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    datesArray.push(new Date(dt));
  }
  return datesArray;
}

function getFirstAndLastDayOfTheWeek(inputDate: Date) {
  const firstDayOfTheWeek = new Date(
    inputDate.setDate(inputDate.getDate() - inputDate.getDay())
  );
  const lastDayOfTheWeek = new Date(
    inputDate.setDate(inputDate.getDate() - inputDate.getDay() + 6)
  );
  return {
    firstDayOfTheWeek,
    lastDayOfTheWeek,
  };
}

export {
  getWeeksInMonth,
  getFormattedDate,
  getDaysArray,
  getFirstAndLastDayOfTheWeek,
};
