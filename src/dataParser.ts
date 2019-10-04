import { columns } from "./constants";

export const dataParser = state => {
  const header = "{{Weather box";
  const footer = "}}";
  const location = "|location = \n";
  const collapsedSettings =
    state.settings.collapsed === "true" ? `|collapsed = yes \n` : "";
  const openSettings = state.settings.open === "true" ? `|open = yes \n` : "";
  const singleLineSettings =
    state.settings.singleLine === "true" ? `|singleLine = yes` : "";

  const units = { temp: "", precip: "", snow: "" };
  if (state.settings.metric == "true") {
    units.temp = "C";
    units.precip = "mm";
    units.snow = "cm";
  } else {
    units.temp = "F";
    units.precip = "inch";
    units.snow = "inch";
  }

  const months = columns.map(c => `|${c.name}`);
  const fields = state.data.map(r => ` ${r.field}`);
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
    .filter(d => d.selected === true)
    .map(d => d.templateCode);

  const returnRowObj = () => {
    const looper = [];
    selectedRows.forEach(r => {
      for (let i = 1; i < columns.length - 1; i++) {
        const col = columns[i].name;
        //@ts-ignore
        looper.push(`|${col} ${r} = \n`);
        if (i % 12 === 0) {
          //@ts-ignore
          looper.push("\n");
        }
      }
    });
    return looper.join("");
  };

  return `${header} \n ${location}${collapsedSettings}${openSettings}${singleLineSettings} \n \n ${returnRowObj()}${footer}`;
};
