export enum Colours {
  NONE = 'none',
  GREEN = 'green',
  BLUE = 'blue',
  PASTEL = 'pastel',
  STANDARD = 'standard',
}

export enum Category {
  BLANK = '',
  TEMP = 'temp',
  PRECIP = 'precip',
  SNOW = 'snow'
}

const DEFAULT_COLUMN_WIDTH = 78;

export const columns = [
  { key: "field", name: "Month", width: 200 },
  { key: "jan", name: "Jan", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "feb", name: "Feb", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "mar", name: "Mar", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "apr", name: "Apr", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "may", name: "May", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "jun", name: "Jun", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "jul", name: "Jul", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "aug", name: "Aug", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "sep", name: "Sep", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "oct", name: "Oct", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "nov", name: "Nov", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "dec", name: "Dec", editable: true, width: DEFAULT_COLUMN_WIDTH },
  { key: "year", name: "Year", width: 90 },
];

export const rows = [
  { key: 0, field: "Record high humidex", templateCode: "maximum humidex" },
  { key: 1, field: "Record high", templateCode: "record high" },
  { key: 2, field: `Mean maximum`, templateCode: "avg record high" },
  { key: 3, field: "Average High", templateCode: "high" },
  { key: 4, field: "Daily mean", templateCode: "mean" },
  { key: 5, field: "Average Low", templateCode: "low" },
  { key: 6, field: "Mean minimum", templateCode: "avg record low" },
  { key: 7, field: "Record low", templateCode: "record low" },
  { key: 8, field: "Record low wind chill", templateCode: "chill" },
  { key: 9, field: "Average precipitation", templateCode: "precipitation" },
  { key: 10, field: "Average rainfall", templateCode: "rain" },
  { key: 11, field: "Average snowfall", templateCode: "snow" },
  { key: 12, field: "Average precipitation days", templateCode: "precipitation days" },
  { key: 13, field: "Average rainy days", templateCode: "rain days" },
  { key: 14, field: "Average snowy days", templateCode: "snow days" },
  { key: 15, field: "Average relative humidity", templateCode: "humidity" },
  { key: 16, field: "Average afternoon humidity", templateCode: "afthumidity" },
  { key: 17, field: "Mean monthly sunshine hours", templateCode: "sun" },
  { key: 18, field: "Mean daily sunshine hours", templateCode: "d sun" },
  { key: 19, field: "Percent possible sunshine", templateCode: "percentsun" },
  { key: 20, field: "Average ultraviolet index", templateCode: "uv" }
];
