export enum Colours {
  NONE = 'none',
  GREEN = 'green',
  BLUE = 'blue',
  PASTEL = 'pastel',
  STANDARD = 'standard',
}

const DEFAULT_COLUMN_WIDTH = 78;

export const columns = [
  { key: "month", name: "Month", width: 200 },
  { key: "jan", name: "Jan.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "feb", name: "Feb.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "mar", name: "Mar.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "apr", name: "Apr.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "may", name: "May", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "jun", name: "June", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "jul", name: "July", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "aug", name: "Aug.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "sep", name: "Sep.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "oct", name: "Oct.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "nov", name: "Nov.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "dec", name: "Dec.", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "year", name: "Year", width: 90 },
];

export const rows = [
  { key: 0, month: "Record high humidex" },
  { key: 1, month: "Record high" },
  { key: 2, month: "Mean maximum" },
  { key: 3, month: "Average High" },
  { key: 4, month: "Daily mean" },
  { key: 5, month: "Average Low" },
  { key: 6, month: "Mean minimum" },
  { key: 7, month: "Record low" },
  { key: 8, month: "Record low wind chill" },
  { key: 9, month: "Average precipitation" },
  { key: 10, month: "Average rainfall" },
  { key: 11, month: "Average snowfall" },
  { key: 12, month: "Average precipitation days" },
  { key: 13, month: "Average rainy days" },
  { key: 14, month: "Average snowy days" },
  { key: 15, month: "Average relative humidity" },
  { key: 16, month: "Average afternoon humidity" },
  { key: 17, month: "Mean monthly sunshine hours" },
  { key: 18, month: "Mean daily sunshine hours" },
  { key: 19, month: "Percent possible sunshine" },
  { key: 20, month: "Average ultraviolet index" }
];
