import { columns, Category, Colours } from "./constants";

const { TEMP, PRECIP, SNOW } = Category;

const { NONE, GREEN, BLUE, PASTEL, STANDARD } = Colours;

export const dataParser = state => {
  const {
    metric,
    collapsed,
    open,
    singleLine,
    precipColour,
    rainColour,
    snowColour,
    tempColour,
    humidColour
  } = state.settings;

  const header = "{{Weather box";
  const footer = "}}";
  const location = "|location = \n";

  const collapsedSettings = collapsed === "true" ? `|collapsed = yes \n` : "";
  const openSettings = open === "true" ? `|open = yes \n` : "";
  const singleLineSettings =
    singleLine === "true" ? `|singleLine = yes \n` : "";

  // Add precipitation days, colours here

  const precipStatement = precipColour === NONE ? '' : `|precipitation colour = ${precipColour}\n`;
  const rainStatement = rainColour === NONE ? '' : `|rain colour = ${rainColour}\n`;
  const snowStatement = snowColour === NONE ? '' : `|snow colour = ${snowColour}\n`;
  const tempStatement = tempColour === NONE ? '' : `|temperature colour = ${tempColour}\n`;
  const humidStatement = humidColour === NONE ? '' : `|humidity colour = ${humidColour}\n`;

  const metricTemp = metric === "true" ? "C" : "F";
  const metricPrecip = metric === "true" ? "mm" : "inch";
  const metricSnow = metric === "true" ? "cm" : "inch";

  const unitType = unit => {
    if (unit.category === TEMP) {
      return metricTemp;
    } else if (unit.category === PRECIP) {
      return metricPrecip;
    } else if (unit.category === SNOW) {
      return metricSnow;
    } else {
      return "";
    }
  };

  const selectedRows = state.data.filter(d => d.selected === true);
  //.map(d => d.templateCode);

  const returnRowObj = () => {
    const looper = [];
    selectedRows.forEach(r => {
      for (let i = 1; i < columns.length - 1; i++) {
        const col = columns[i].name;
        const colId = columns[i].key;
        //@ts-ignore
        looper.push(`|${col} ${r.templateCode} ${unitType(r)} = \n`);
        // if (precip or snow is present in row) { looper.push(`|${col} ${r} {metricTemp} = \n`); }
        if (i % 12 === 0) {
          //@ts-ignore
          looper.push("\n");
        }
      }
    });
    return looper.join("");
  };

  return `${header} \n${location}${collapsedSettings}${openSettings}${singleLineSettings}${tempStatement}${precipStatement}${rainStatement}${snowStatement}${humidStatement} \n \n${returnRowObj()}${footer}`;
};
