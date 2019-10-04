import { columns, Category } from "./constants";

const { TEMP, PRECIP, SNOW } = Category;

export const dataParser = state => {
  const header = "{{Weather box";
  const footer = "}}";
  const location = "|location = \n";

  const collapsedSettings =
    state.settings.collapsed === "true" ? `|collapsed = yes \n` : "";
  const openSettings = state.settings.open === "true" ? `|open = yes \n` : "";
  const singleLineSettings =
    state.settings.singleLine === "true" ? `|singleLine = yes` : "";

  const metricTemp = state.settings.metric === "true" ? "C" : "F";
  const metricPrecip = state.settings.metric === "true" ? "mm" : "inch";
  const metricSnow = state.settings.metric === "true" ? "cm" : "inch";

  const unitType = unit => {
    if (unit.category === TEMP ) {
      return metricTemp;
    } else if (unit.category === PRECIP) {
      return metricPrecip;
    } else if (unit.category === SNOW) {
      return metricSnow;
    } else {
      return '';
    }
  };

  const jan = state.data.map(v => v["jan"]);
  const feb = state.data.map(v => v["feb"]);
  const mar = state.data.map(v => v["mar"]);
  const apr = state.data.map(v => v["apr"]);
  const may = state.data.map(v => v["may"]);
  const jun = state.data.map(v => v["jun"]);
  const jul = state.data.map(v => v["jul"]);
  const aug = state.data.map(v => v["aug"]);
  const sep = state.data.map(v => v["sep"]);
  const oct = state.data.map(v => v["oct"]);
  const nov = state.data.map(v => v["nov"]);
  const dec = state.data.map(v => v["dec"]);
  const monthState = {
    jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec
  };

  const selectedRows = state.data
    .filter(d => d.selected === true);
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
  console.log(monthState.jan);

  return `${header} \n${location}${collapsedSettings}${openSettings}${singleLineSettings} \n \n${returnRowObj()}${footer}`;
};
