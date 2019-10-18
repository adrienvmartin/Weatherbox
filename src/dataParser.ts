import { columns, Category, Colours } from "./constants";

const { TEMP, PRECIP, SNOW } = Category;

const { NONE, STANDARD } = Colours;

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
    humidColour,
    unitPrecipDays,
    unitRainDays,
    unitSnowDays
  } = state.settings;

  const header = "{{Weather box";
  const footer = "}}";
  const location = "|location = \n";

  const collapsedSettings = collapsed === "true" ? `|collapsed = yes \n` : "";
  const openSettings = open === "true" ? `|open = yes \n` : "";
  const singleLineSettings =
    singleLine === "true" ? `|single line = yes \n` : "";
  const metricSettings = metric === "true" ? '|metric first = yes \n' : "";

  const precipStatement =
    precipColour === NONE ? "" : `|precipitation colour = ${precipColour}\n`;
  const rainStatement =
    rainColour === NONE ? "" : `|rain colour = ${rainColour}\n`;
  const snowStatement =
    snowColour === NONE ? "" : `|snow colour = ${snowColour}\n`;
  const tempStatement =
    tempColour === STANDARD ? "" : `|temperature colour = ${tempColour}\n`;
  const humidStatement =
    humidColour === NONE ? "" : `|humidity colour = ${humidColour}\n`;

  const precipUnits = `|unit precipitation days = ${unitPrecipDays} \n`;
  const rainUnits = `|unit rain days = ${unitRainDays} \n`;
  const snowUnits = `|unit snow days = ${unitSnowDays} \n`;

  const mainSettings = `${location}${metricSettings}${collapsedSettings}${openSettings}${singleLineSettings}${tempStatement}${precipStatement}${rainStatement}${snowStatement}${humidStatement}${precipUnits}${rainUnits}${snowUnits}`;

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

  const returnRowObj = () => {
    const looper = [];
    selectedRows.forEach(r => {
      for (let i = 1; i < columns.length - 1; i++) {
        const col = columns[i].name;
        //@ts-ignore
        looper.push(`|${col} ${r.templateCode} ${unitType(r)} = \n`);
        if (i % 12 === 0) {
          //@ts-ignore
          looper.push("\n");
        }
      }
    });
    return looper.join("");
  };

  return `${header} \n${mainSettings} \n${returnRowObj()}${footer}`;
};
